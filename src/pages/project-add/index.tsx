import React from 'react'
import { Form, Input, Button,  Radio } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { peojectIcon } from './config'
import BIcon from '../../common/components/bicon'
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
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  }
  return (
    <Form onSubmit={handleSubmit} layout='horizontal' {...formItemLayout} className="addProject">
      <Form.Item label="项目名称">
        {
          form.getFieldDecorator('tagname', {
            rules: [{ required: true, message: '请输入项目名称!' }]
          })(<Input  placeholder="请输入项目名称" />)
        }
      </Form.Item>
      <Form.Item label="项目描述">
        {
          form.getFieldDecorator('tagdescrib', {
            rules: [{ required: true, message: '请填写项目描述!' }]
          })(<Input placeholder="请填写项目描述" />)
        }
      </Form.Item>
      <Form.Item label="浏览地址">
        {
          form.getFieldDecorator('viewUrl', {
            rules: [{ required: true, message: '请填写项目浏览地址!' }]
          })(<Input placeholder="请填写项目浏览地址" />)
        }
      </Form.Item>
      <Form.Item label="github地址">
        {
          form.getFieldDecorator('githubUrl', {
            rules: [{ required: true, message: '请填写项目github地址!' }]
          })(<Input placeholder="请填写项目github地址" />)
        }
      </Form.Item>
      <Form.Item label="项目图标">
        {
          form.getFieldDecorator('radio-button')(
            <Radio.Group>
              {
                peojectIcon.map((icon:string) => <Radio.Button value={icon}><BIcon type={icon}></BIcon></Radio.Button>)
              }
            </Radio.Group>,
          )
        }
      </Form.Item>
      <div  className="btnbox">
        <Button type="primary" htmlType="submit">提交</Button>
      </div>
    </Form>
  )
}

export default Form.create({ name: 'addProject' })(AddTag)
