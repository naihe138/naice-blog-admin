import React from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { RouterProps } from 'react-router'
import { login, loginPrams } from  './server'
import './login.scss'
function LoginForm (props: (FormComponentProps & RouterProps)) {
  const { form, history } = props
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password }: loginPrams = values
        const { data } = await login({username, password})
        if (data.code === 1) {
          window.localStorage.setItem('TOKEN', JSON.stringify(data.result))
          history.push('/')
        }
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
              rules: [{ required: true, message: '请大人输入账号!' }],
            })(
              <Input
                prefix={<Icon type="user" style={iconColor} />}
                placeholder='请大人输入账号!'
              />
            )
          }
        </Form.Item>
        <Form.Item>
          {
            form.getFieldDecorator('password', {
              rules: [{ required: true, message: '请大人输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={iconColor} />}
                type="password"
                placeholder='请大人输入密码!'
              />,
            )
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Form.create({ name: 'admin_login' })(LoginForm)
