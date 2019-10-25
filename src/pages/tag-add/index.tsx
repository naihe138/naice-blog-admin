import React from 'react'
import { Form, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import './index.scss'
function AddTag (props: FormComponentProps) {
  const form = props.form
  function handleSubmit (e: React.FormEvent) {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 19 },
  }
  return (
    <Form onSubmit={handleSubmit} layout='horizontal' {...formItemLayout} className="addtag">
      <Form.Item label="标签名">
        {
          form.getFieldDecorator('tagname', {
            rules: [{ required: true, message: '请输入标签名!' }]
          })(<Input  placeholder="请输入标签名" />)
        }
      </Form.Item>
      <Form.Item label="描述">
        {
          form.getFieldDecorator('tagdescrib', {
            rules: [{ required: true, message: '请填写描述!' }]
          })(<Input placeholder="请填写描述" />)
        }
      </Form.Item>
      <div className="btnbox">
        <Button type="primary" htmlType="submit" className="btn">提交</Button>
      </div>
    </Form>
  )
}

export default Form.create({ name: 'addtag' })(AddTag)
