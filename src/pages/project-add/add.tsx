import React from 'react'
import { Form, Input, Button,  Radio, message } from 'antd'
import { peojectIcon, iconType } from './config'
import BIcon from '../../common/components/bicon'
import { useQuery } from '../../utils/index'
import { addProject, editeProject } from '../../utils/api'
import './index.scss'

function AddTag (props: any) {
  const form = props.form
  const query = useQuery()
  function handleSubmit (e: React.FormEvent) {
    e.preventDefault()
    form.validateFields((err: any, values: any) => {
      if (!err) {
        let id = query.get('id')
        id ? edit(values, id) : add(values)
      }
    })
  }

  async function add (values: any) {
    const {data} = await addProject(values)
    if (data.code) {
      message.success(data.message)
      props.history.push('/project')
    }
  }

  async function edit (values: any, id:string) {
    const { data } = await editeProject(id, values)
    if (data.code) {
      message.success(data.message)
      props.history.push('/project')
    }
  }

  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  }
  return (
    <Form onSubmit={handleSubmit} layout='horizontal' {...formItemLayout} className="addProject">
      <Form.Item label="项目名称">
        {
          form.getFieldDecorator('title', {
            initialValue: props.project.title || '',
            rules: [{ required: true, message: '请输入项目名称!' }]
          })(<Input  placeholder="请输入项目名称" />)
        }
      </Form.Item>
      <Form.Item label="项目描述">
        {
          form.getFieldDecorator('descript', {
            initialValue: props.project.descript || '',
            rules: [{ required: true, message: '请填写项目描述!' }]
          })(<Input placeholder="请填写项目描述" />)
        }
      </Form.Item>
      <Form.Item label="浏览地址">
        {
          form.getFieldDecorator('view', {
            initialValue: props.project.view || '',
            rules: [{ required: true, message: '请填写项目浏览地址!' }]
          })(<Input placeholder="请填写项目浏览地址" />)
        }
      </Form.Item>
      <Form.Item label="github地址">
        {
          form.getFieldDecorator('github', {
            initialValue: props.project.github || '',
            rules: [{ required: true, message: '请填写项目github地址!' }]
          })(<Input placeholder="请填写项目github地址" />)
        }
      </Form.Item>
      <Form.Item label="项目图标">
        {
          form.getFieldDecorator('icon', {
            initialValue: props.project.icon || '',
            rules: [{ required: true, message: '请填icon!' }]
          })(
            <Radio.Group>
              {
                peojectIcon.map((icon:iconType) => (
                  <Radio.Button
                    value={icon.class}
                    key={icon.class}>
                    <BIcon type={icon.class}></BIcon>
                  </Radio.Button>
                ))
              }
            </Radio.Group>
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
