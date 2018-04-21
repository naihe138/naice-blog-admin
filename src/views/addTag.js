
import React from 'react'
import { Form , Input, Button, message } from 'antd';
import { connect } from 'react-redux'
import Layout from '../components/layout'
import SubTitle from '../components/subTitle'
import { toAddTag } from '../store/article'
const FormItem = Form.Item;


class TagForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {name, descript = ''} = values
        toAddTag({name, descript}).then(res => {
          if (res.code === 1) {
            message.success(res.message)
            this.props.history.push('/tag')
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入你的标签名' }],
          })(
            <Input placeholder="请输入你的标签名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('descript', {
            rules: [{message: '请输入标签描述' }],
          })(
            <Input placeholder="请输入标签描述" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedTagForm = Form.create()(TagForm)

class AddTag extends React.Component {
  render () {
    return (
      <Layout history={this.props.history}>
        <SubTitle title="新增标签" />
        <WrappedTagForm history={this.props.history} />
      </Layout>
    )
  }
}

export default connect()(AddTag)
