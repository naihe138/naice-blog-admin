import React, { useState, useEffect } from 'react'
import { Form, Input, Col, Select } from 'antd'
import { fetchTag } from '../../utils/api'
const { Option } = Select

const BaseInfo = (props: any) => {
  const article = props.article
  const title = article.title || ''
  const descript = article.descript || ''
  const keyword = article.keyword || ''
  
  const [allTags, setAllTags] = useState([]);
  const [tagIds, setTagIds] = useState<string[]>([]);

  useEffect(() => {
    const getAllTages = async () => {
      const { data } = await fetchTag()
      setAllTags(data.result.list || [])
    }
    getAllTages();
  }, [])

  useEffect(() => {
    const ids = article.tag ? article.tag.map((item:any) => item._id) : [];
    setTagIds(ids)
  }, [article.tag]);

  function handleChange(value: string[]) {
    setTagIds(value)
  }

  return (
    <div className="baseInfo">
      <Form layout="inline" labelCol={{ span: 3 }} wrapperCol={{ span: 20 }}>
        <Col span={10}>
          <Form.Item label="标题" rules={[{ required: true, message: '请输入标题!' }]}>
            <Input placeholder="请输入标题" value={title} />
          </Form.Item>
        </Col>
        <Col span={14}>
          <Form.Item label="描述" rules={[{ required: true, message: '请输入标题!' }]}>
            <Input placeholder="请输入简短的描述" value={descript} />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item label="关键字" rules={[{ required: true, message: '请输入标题!' }]}>
            <Input placeholder="请输入关键字用，分割" value={keyword} />
          </Form.Item>
        </Col>
        <Col span={14}>
          <Form.Item label="标签" rules={[{ required: true, message: '请选择标签!' }]}>
            <Select
              mode="multiple"
              placeholder="请选择标签"
              value={tagIds}
              onChange={handleChange}
            >
              {
                allTags.map((item: any) => <Option key={item._id} value={item._id}>{item.name}</Option>)
              }
            </Select>
          </Form.Item>
        </Col>
      </Form>
    </div>
  )
}

export default BaseInfo
