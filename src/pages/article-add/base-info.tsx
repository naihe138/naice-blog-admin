import React from 'react'
import { Form, Input, Col, Select, Switch } from 'antd'
import { FormProps } from 'antd/es/form'
import { fetchTag } from '../../utils/api'
const { Option } = Select


interface IFormComponentProps<T> extends FormProps<T> {
  article: any,
  wrappedComponentRef: any,
  submit: any
}

// 必须是class 形式才能通过 wrappedComponentRef 拿到实例
class BaseInfo extends React.Component<IFormComponentProps<any>> {
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.switchChange = this.switchChange.bind(this)
  }
  state = {
    allTags: [],
    tagIds: [],
    article: this.props.article
  }
  async componentDidMount () {
    const { data } = await fetchTag()
    this.setState({
      allTags: data.result.list || [],
    })
  }
  componentWillReceiveProps(nextProps: any) {
    const article = nextProps.article
    if (article._id) {
      const tagIds = article.tag ? article.tag.map((item:any) => item._id) : []
      this.setState({
        article: nextProps.article,
        tagIds
      });
    }
  }
  handleChange(value: any) {
    this.setState({tagIds: value})
  }
  onFinish = () => {
    this.props.submit(this.state.article, this.state.tagIds)
  };
  inputChange(key: string, e: any) {
    this.setState({
      article: {
        ...this.state.article,
        [key]: e.target.value
      }
    });
  }
  switchChange(key: string, checked: boolean) {
    this.setState({
      article: {
        ...this.state.article,
        [key]: checked ? 1 : 2
      }
    });
  }
  render () {
    const { allTags, article, tagIds } = this.state
    const title = article.title || ''
    const descript = article.descript || ''
    const keyword = article.keyword || ''
    return (
      <div className="baseInfo">
        <Form layout="inline"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          ref={this.props.wrappedComponentRef}
          onFinish={this.onFinish}>
          <Col span={10}>
            <Form.Item label="标题" rules={[{ required: true, message: '请输入标题!' }]}>
              <Input placeholder="请输入标题" value={title} onChange={(e) => this.inputChange('title', e)} />
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item label="描述" rules={[{ required: true, message: '请输入标题!' }]}>
              <Input placeholder="请输入简短的描述" value={descript} onChange={(e) => this.inputChange('descript', e)} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="关键字" rules={[{ required: true, message: '请输入标题!' }]}>
              <Input placeholder="请输入关键字用，分割" value={keyword} onChange={(e) => this.inputChange('keyword', e)} />
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item label="标签" rules={[{ required: true, message: '请选择标签!' }]}>
              <Select
                mode="multiple"
                placeholder="请选择标签"
                value={tagIds}
                onChange={this.handleChange}
              >
                {
                  allTags.map((item: any) => <Option key={item._id} value={item._id}>{item.name}</Option>)
                }
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="是否发布" rules={[{ required: true, message: '是否现在要发布!' }]}>
              <Switch checkedChildren="发布" unCheckedChildren="草稿" checked={ article.state === 1} onChange={(checked: boolean) => this.switchChange('state', checked) } />
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item label="是否公开" rules={[{ required: true, message: '是否是公开文章!' }]}>
              <Switch checkedChildren="公开" unCheckedChildren="私密" checked={ article.publish === 1 } onChange={(checked: boolean) => this.switchChange('publish', checked) } />
            </Form.Item>
          </Col>
        </Form>
      </div>
    )
  }
}

export default BaseInfo
