import React from 'react'
import { Form, Input, Button, Upload, Icon, message } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { UploadChangeParam } from 'antd/es/upload'
import { uploadConfig,  } from '../../utils/api'

import './index.scss'
const { TextArea } = Input

function AddMusic (props: FormComponentProps) {
  const form = props.form
  const posterUploadConfig = {
    name: 'file',
    ...uploadConfig(),
    onChange(info:UploadChangeParam) {
      if (info.file.response && info.file.response.code) {
        message.success(info.file.response.message)
        form.setFieldsValue({
          poster: info.file.response.result
        })
      }
    }
  }
  const musicUploadConfig = {
    name: 'file',
    ...uploadConfig(),
    onChange(info:UploadChangeParam) {
      if (info.file.response && info.file.response.code) {
        message.success(info.file.response.message)
        form.setFieldsValue({
          url: info.file.response.result
        })
      }
    }
  }
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
      <Form.Item label="歌名">
        {
          form.getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入歌名!' }]
          })(<Input  placeholder="请输入歌名" />)
        }
      </Form.Item>
      <Form.Item label="歌手">
        {
          form.getFieldDecorator('name', {
            rules: [{ required: true, message: '请填写歌手!' }]
          })(<Input placeholder="请填写歌手" />)
        }
      </Form.Item>
      <Form.Item label="歌词">
        {
          form.getFieldDecorator('lyrics', {
            rules: [{ required: true, message: '请填写歌词!' }]
          })(<TextArea rows={4} placeholder="请填写歌词" />)
        }
      </Form.Item>
      <Form.Item label="海报链接">
        {
          form.getFieldDecorator('poster', {
            rules: [{ required: true, message: '请填写海报链接!' }]
          })(<Input placeholder="请填写海报链接" />)
        }
        <Upload {...posterUploadConfig}>
          <Button type="link"><Icon type="upload" /> 点击上传海报</Button>
        </Upload>
      </Form.Item>
      <Form.Item label="歌曲链接">
        {
          form.getFieldDecorator('url', {
            rules: [{ required: true, message: '请填写歌曲链接!' }]
          })(<Input placeholder="请填写歌曲链接" />)
        }
        <Upload {...musicUploadConfig}>
          <Button type="link"><Icon type="upload" /> 点击上传歌曲</Button>
        </Upload>
      </Form.Item>
      <div  className="btnbox">
        <Button type="primary" htmlType="submit">提交</Button>
      </div>
    </Form>
  )
}

export default Form.create({ name: 'addProject' })(AddMusic)
