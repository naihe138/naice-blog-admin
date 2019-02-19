
import React, { Component } from 'react'
import { Form, Input, Icon, Upload, Button, message } from 'antd';
import { toAddMusic, toEditeMusic, getMusicById} from '../store/music'
import Layout from '../components/layout'
import SubTitle from '../components/subTitle'
import { uploadConfig } from '../api'

const { TextArea } = Input;

const CustomizedForm = Form.create({
  name: 'addMusic',
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      title: Form.createFormField({
        ...props.title,
        value: props.title.value
      }),
      name: Form.createFormField({
        ...props.name,
        value: props.name.value
      }),
      lyrics: Form.createFormField({
        ...props.lyrics,
        value: props.lyrics.value
      }),
      poster: Form.createFormField({
        ...props.poster,
        value: props.poster.value
      }),
      url: Form.createFormField({
        ...props.url,
        value: props.url.value
      })
    }
  }
})((props) => {
  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const handleSubmit = () => {
    props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        let res = null
        if (props.editId) {
          res = await toEditeMusic(props.editId, values)
        } else {
          res = await toAddMusic(values)
        }
        if (res.code === 1) {
          message.success('添加音乐成功');
        }
        props.history.push('/music')
      }
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item {...formItemLayout} label="歌名：">
        {
          getFieldDecorator('title', {
            rules: [{
              required: true, message: '请填写歌名!',
            }],
          })(<Input />)
        }
      </Form.Item>
      <Form.Item {...formItemLayout} label="歌手：">
        {
          getFieldDecorator('name', {
            rules: [{
              required: true, message: '请填写歌手名字!',
            }],
          })(<Input />)
        }
      </Form.Item>
      <Form.Item {...formItemLayout} label="歌词">
        {
          getFieldDecorator('lyrics', {
            rules: [{
              required: false, message: '请填写歌词!',
            }],
          })(<TextArea rows={4} />)
        }
      </Form.Item>
      <Form.Item {...formItemLayout} label="海报链接">
        {
          getFieldDecorator('poster', {
            rules: [{
              required: false, message: '请填写海报链接!',
            }],
          })(<Input />)
        }
        <Upload {...props.posterFile} onChange={props.uploadPosterChange}>
          <Button>
            <Icon type="upload" /> 上传海报
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item {...formItemLayout} label="歌曲链接">
        {
          getFieldDecorator('url', {
            rules: [{
              required: true, message: '请填写歌曲链接!',
            }],
          })(<Input />)
        }
        <Upload {...props.musicFile} onChange={props.uploadMusicChange}>
          <Button>
            <Icon type="upload" />上传歌曲
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item { ...tailFormItemLayout }>
        {
          props.editId ? 
            <Button type="primary" htmlType="submit">修改</Button> : 
            <Button type="primary" htmlType="submit">添加</Button>
        }
        <Button style={{margin: '0 16px' }}>返回</Button>
      </Form.Item>
    </Form>
  );
});

class AddMusic extends React.Component {
  state = {
    fields: {
      title: {
        value: ''
      },
      name: {
        value: ''
      },
      lyrics: {
        value: ''
      },
      poster: {
        value: ''
      },
      url: {
        value: ''
      }
    },
    poster: {
      ...uploadConfig(),
      listType: 'picture'
    },
    musicFile: {
      name: 'file',
      ...uploadConfig()
    },
    editId: ''
  };
  uploadPosterChange = (info) => {
    if (info.file.status !== 'uploading') {
      let obj = {
        poster: {
          value: info.fileList[0].response.result
        }
      }
      this.setState(({ fields }) => ({
        fields: { ...fields, ...obj }
      }));
    }
  }
  uploadMusicChange = (info) => {
    if (info.file.status !== 'uploading') {
      let obj = {
        url: {
          value: info.fileList[0].response.result
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
  async componentDidMount () {
    if (this.props.match.params.id) {
      const res = await getMusicById({id: this.props.match.params.id})
      if (res.result && res.result.length > 0) {
        let obj = res.result[0]
        let prams = {
          title: {
            value: obj.title
          },
          name: {
            value: obj.name
          },
          lyrics: {
            value: obj.lyrics
          },
          poster: {
            value: obj.poster
          },
          url: {
            value: obj.url
          }
        }
        this.setState(({ fields }) => ({
          fields: { ...fields, ...prams }
        }));
      }
    }
  }
  render() {
    const {fields, poster, musicFile} = this.state;
    return (
      <Layout history={this.props.history}>
        <SubTitle title="添加音乐" />
        <CustomizedForm 
          {...fields}
          musicFile={musicFile}
          posterFile={poster}
          history={this.props.history}
          editId={this.props.match.params.id}
          uploadPosterChange={this.uploadPosterChange}
          uploadMusicChange={this.uploadMusicChange}
          onChange={this.handleFormChange} />
      </Layout>
    );
  }
}


export default AddMusic