import React from 'react'
import { Form, Input, Button, Upload, Icon, message } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { UploadChangeParam } from 'antd/es/upload'
import './index.scss'
const { TextArea } = Input

function AddMusic (props: FormComponentProps) {
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

  const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info:UploadChangeParam) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
  return (
    <Form onSubmit={handleSubmit} layout='horizontal' {...formItemLayout} className="addProject">
      <Form.Item label="歌名">
        {
          form.getFieldDecorator('tagname', {
            rules: [{ required: true, message: '请输入歌名!' }]
          })(<Input  placeholder="请输入歌名" />)
        }
      </Form.Item>
      <Form.Item label="歌手">
        {
          form.getFieldDecorator('tagdescrib', {
            rules: [{ required: true, message: '请填写歌手!' }]
          })(<Input placeholder="请填写歌手" />)
        }
      </Form.Item>
      <Form.Item label="歌词">
        {
          form.getFieldDecorator('viewUrl', {
            rules: [{ required: true, message: '请填写歌词!' }]
          })(<TextArea rows={4} placeholder="请填写歌词" />)
        }
      </Form.Item>
      <Form.Item label="海报链接">
        {
          form.getFieldDecorator('githubUrl', {
            rules: [{ required: true, message: '请填写海报链接!' }]
          })(
            <>
              <Input placeholder="请填写海报链接" />
              <Upload {...uploadProps}>
                <Button><Icon type="upload" /> 点击上传海报</Button>
              </Upload>
            </>
          )
        }
      </Form.Item>
      <Form.Item label="歌曲链接">
        {
          form.getFieldDecorator('githubUrl', {
            rules: [{ required: true, message: '请填写歌曲链接!' }]
          })(
            <>
              <Input placeholder="请填写歌曲链接" />
              <Upload {...uploadProps}>
                <Button><Icon type="upload" /> 点击上传海报</Button>
              </Upload>
            </>
          )
        }
      </Form.Item>
      <div  className="btnbox">
        <Button type="primary" htmlType="submit">提交</Button>
      </div>
    </Form>
  )
}

export default Form.create({ name: 'addProject' })(AddMusic)
