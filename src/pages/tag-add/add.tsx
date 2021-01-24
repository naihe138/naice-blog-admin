import React from 'react'
import { Form, Input, Button } from 'antd'
import './index.scss'
import { addTag } from '../../utils/api'

function AddTag (props: any) {
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const res = await addTag(values)
    if (res.data.code) {
      props.history.push('/tags')
    }
  };
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  }
  return (
    <Form onFinish={onFinish} layout='horizontal' {...formItemLayout} className="addtag">
      <Form.Item label="标签名" name="name" rules={[{ required: true, message: '请输入标签名!' }]}>
        <Input  placeholder="请输入标签名" />
      </Form.Item>
      <Form.Item label="描述" name="descript" rules={[{ required: true, message: '请填写描述!' }]}>
        <Input placeholder="请填写描述" />
      </Form.Item>
      <div className="btnbox">
        <Button type="primary" htmlType="submit" className="btn">提交</Button>
      </div>
    </Form>
  )
}

export default AddTag
