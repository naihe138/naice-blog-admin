import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import {login} from '../api'
import '../static/less/login.less'

const FormItem = Form.Item

class LoginForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
		  if (!err) {
				console.log('Received values of form: ', values)
				this.toLogin(values)
		  }
		})
	}
	async toLogin (prams) {
		const {username, password} = prams
		const res = await login({username, password})
		if (res.code === 1) {
			window.localStorage.setItem('TOKEN', JSON.stringify(res.result))
			this.props.history.push('/')
		}
	}
  render() {
		const { getFieldDecorator } = this.props.form
		return (
			<div className="loginBox">
				<div className="loginmark"></div>
				<div className="loginContent">
					<Form onSubmit={this.handleSubmit} className="loginForm">
						<FormItem>
							{getFieldDecorator('username', {
								rules: [{ required: true, message: '请输入你的用户名!' }],
							})(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入你的用户名" />
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入你的密码!' }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入你的密码" />
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('remember', {
								valuePropName: 'checked',
								initialValue: true,
							})(
								<Checkbox>记住我</Checkbox>
							)}
							<a className="loginFormForgot" href="">忘记密码</a>
							<Button type="primary" htmlType="submit" className="loginFormButton">
								登录
							</Button>
							<Link to="/home">游客登录!</Link>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}

export default Form.create()(LoginForm)