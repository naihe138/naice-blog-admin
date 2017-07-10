// 登录页面
import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import {toLogin} from '../../action/user.js';
import './login.less'
import logo from '../../assets/imgs/averter.jpg'
const FormItem = Form.Item;
class Login extends Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        store.dispatch(toLogin({
          username: values.username,
          password: values.password
        }, data => {
          if (data.token) {
            this.props.history.push('/home')
          } else {
            alert(data.message)
          }
        }));
      }
    });
  }
  render () {
    const {getFieldDecorator} = this.props.form;
    return (
      <section className="loginBox">
        <div id="components-form-demo-normal-login">
          <img className="logo" src={logo}/>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{
                  required: true,
                  message: '请输入用户名'
                }],
              })(
                <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名"/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
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

const mapStateToProps = function(store) {
  return {
    user: store.user
  };
};

const formLogin = Form.create()(Login)

export default connect(mapStateToProps)(formLogin);
