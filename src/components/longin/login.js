// 登录页面
import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './login.less'
const FormItem = Form.Item;
class Login extends Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {
    const {getFieldDecorator} = this.props.form;
    return (
      <section className="loginBox">
        <div id="components-form-demo-normal-login">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('用户名', {
                rules: [{
                  required: true,
                  message: '请输入用户名'
                }],
              })(
                <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('密码', {
                rules: [{
                  required: true,
                  message: '请输入密码!'
                }],
              })(
                <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a className="login-form-forgot" href="">忘记密码</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              或者 <a href="/">现在注册!</a>
            </FormItem>
          </Form>
        </div>
      </section>
    )
  }
}
export default Form.create()(Login);