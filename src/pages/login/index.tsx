import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { RouterProps } from 'react-router'
import './login.scss'

function LoginForm (props: (FormComponentProps & RouterProps)) {
  const { form, history } = props
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        history.push('/home')
      }
    })
  }
  const iconColor = { color: 'rgba(0,0,0,.25)' }
  return (
    <div id="login">
      <Form onSubmit={ handleSubmit } className="login-form">
        <Form.Item>
          {
            form.getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={iconColor} />}
                placeholder="Username"
              />
            )
          }
        </Form.Item>
        <Form.Item>
          {
            form.getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={iconColor} />}
                type="password"
                placeholder="Password"
              />,
            )
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form.create({ name: 'admin_login' })(LoginForm)
