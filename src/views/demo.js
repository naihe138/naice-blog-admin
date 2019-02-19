
import React, { Component } from 'react'
import { Form, Input, Upload, Button, Icon, message } from 'antd';

const CustomizedForm = Form.create({
  name: 'global_state',
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      username: Form.createFormField({
        ...props.username,
        value: props.username.value,
      }),
      test: Form.createFormField({
        ...props.test,
        value: props.test.value,
      }),
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  }
})((props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <Form.Item label="Username">
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Username is required!' }],
        })(<Input />)}
      </Form.Item>
      <Form.Item label="test">
        {getFieldDecorator('test', {
          rules: [{ required: true, message: 'test is required!' }],
        })(<Input />)}
        <Upload {...props.upload} onChange={props.onuploadChange}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </Form.Item>
    </Form>
  );
});

class Demo extends React.Component {
  state = {
    fields: {
      username: {
        value: 'benjycui',
      },
      test: {
        value: 'benjycui',
      },
    },
    upload: {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      }
    }
  };
  onuploadChange = (info) => {
    if (info.file.status !== 'uploading') {
      let obj = {
        test: {
          value: info.fileList[0].name
        }
      }
      this.setState(({ fields }) => ({
        fields: { ...fields, ...obj }
      }));
    }
  }
  handleFormChange = (changedFields) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
    }));
  }

  render() {
    const {fields, upload} = this.state;
    return (
      <div>
        <CustomizedForm {...fields} upload={upload} onuploadChange={this.onuploadChange} onChange={this.handleFormChange} />
        <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
      </div>
    );
  }
}

export default Demo