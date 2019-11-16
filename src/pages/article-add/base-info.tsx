import React from 'react'
import { Form, Input, Col, Select } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { fetchTag } from '../../utils/api'
const { Option } = Select

// 必须是class 形式才能通过 wrappedComponentRef 拿到实例
class BaseInfo extends React.Component<FormComponentProps> {
  state = {
    tags: []
  }
  async componentDidMount () {
    const { data } = await fetchTag()
    this.setState({tags: data.result.list || []})
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const { tags } = this.state
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
                getFieldDecorator('descript', {
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
                getFieldDecorator('tag', {
                  rules: [{ required: true, message: '请选择标签!' }],
                })(
                  <Select
                    mode="multiple"
                    placeholder="请选择标签"
                  >
                    {
                      tags.map((item: any) => <Option key={item._id}>{item.name}</Option>)
                    }
                  </Select>
                )
              }
            </Form.Item>
          </Col>
        </Form>
      </div>
    )
  }
}

export default Form.create({name: 'BaseInfo'})(BaseInfo)
