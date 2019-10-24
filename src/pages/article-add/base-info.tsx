import * as React from 'react'
import { Form, Input, Col, Select } from 'antd'
import { FormComponentProps } from 'antd/es/form'
const { Option } = Select

function BaseInfo(props: FormComponentProps) {
  // function handleSubmit (e: React.MouseEvent) {
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values)
  //     }
  //   })
  // }
  const { getFieldDecorator } = props.form
  return (
    <div className="baseInfo">
      <Form layout="inline" labelCol={{ span: 3 }} wrapperCol={{ span: 20 }}>
        <Col span={10}>
          <Form.Item label="标题">
            {
              getFieldDecorator('title', {
                rules: [{ required: true, message: '请输入标题!' }],
              })(<Input placeholder="请输入标题" />)
            }
          </Form.Item>
        </Col>
        <Col span={14}>
          <Form.Item label="描述">
            {
              getFieldDecorator('discribe', {
                rules: [{ required: true, message: '请输入标题!' }],
              })(<Input placeholder="请输入简短的描述" />)
            }
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="关键字">
            {
              getFieldDecorator('keyword', {
                rules: [{ required: true, message: '请输入标题!' }],
              })(<Input placeholder="请输入关键字用，分割" />)
            }
          </Form.Item>
        </Col>
        <Col span={14}>
          <Form.Item label="标签">
            {
              getFieldDecorator('tags', {
                rules: [{ required: true, message: '请选择标签!' }],
              })(
                <Select
                  mode="multiple"
                  placeholder="请选择标签"
                >
                  <Option key="1">a1</Option>
                  <Option key="2">a2</Option>
                  <Option key="3">a3</Option>
                </Select>
              )
            }
          </Form.Item>
        </Col>
        {/* <Col span={14}>
          <Form.Item>
            <Button onClick={handleSubmit}>提交</Button>
          </Form.Item>
        </Col> */}
      </Form>
    </div>
  )
}

export default Form.create({name: 'BaseInfo'})(BaseInfo)
