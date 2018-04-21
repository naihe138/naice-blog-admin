
import React from 'react'
import { Table, Input, Divider, message } from 'antd'
import {connect } from 'react-redux'
import { getComment, delectComment, toEditeComment } from '../store/comment'
import Layout from '../components/layout'
import SubTitle from '../components/subTitle'

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
)

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [{
      title: '留言',
      dataIndex: 'content',
      width: '50%',
      render: (text, record) => this.renderColumns(text, record, 'content'),
    }, {
      title: '状态',
      dataIndex: 'state',
      width: '20%',
      render: (text, record) => this.renderColumns(text, record, 'state'),
    }, {
      title: '功能',
      dataIndex: 'operation',
      render: (text, record) => {
        const { editable } = record
        return (
          <div className="editable-row-operations">
            {
              editable ?
                <span>
                  <a onClick={() => this.save(record)}>保存</a>
                  <Divider type="vertical" />
                  <a onClick={() => this.cancel(record._id)}>取消</a>
                </span>
                : 
                <span>
                  <a onClick={() => this.edit(record._id)}>编辑</a>
                  <Divider type="vertical" />
                  <a onClick={() => this.del(record)}>删除</a>
                </span>
            }
          </div>
        )
      },
    }]
    this.state = { data: [], current_page: 1 }
    this.cacheData = []
    this.change = this.change.bind(this)
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record._id, column)}
      />
    )
  }
  handleChange(value, _id, column) {
    const newData = [...this.state.data]
    const target = newData.filter(item => _id === item._id)[0]
    if (target) {
      target[column] = value
      this.setState({ data: newData })
    }
  }
  edit(_id) {
    const newData = [...this.state.data]
    const target = newData.filter(item => _id === item._id)[0]
    if (target) {
      target.editable = true
      this.setState({ data: newData })
    }
  }
  async save(record) {
    const {_id} = record
    const newData = [...this.state.data]
    const target = newData.filter(item => _id === item._id)[0]
    if (target) {
      delete target.editable
      let {content, state} = target
      state = Number(state)
      const res = await toEditeComment(_id, {content, state})
      if (res.code === 1) {
        message.success(res.message)
        this.getComent()
      }
    }
  }
  cancel(_id) {
    const newData = [...this.state.data]
    const target = newData.filter(item => _id === item._id)[0]
    if (target) {
      Object.assign(target, this.cacheData.filter(item => _id === item._id)[0])
      delete target.editable
      this.setState({ data: newData })
    }
  }
  async del(record) {
    const {_id} = record
    const newData = [...this.state.data]
    const target = newData.filter(item => _id === item._id)[0]
    if (target) {
      const res = await delectComment(_id)
      if (res.code === 1) {
        message.success(res.message)
        this.getComent()
      }
    }
  }
  getComent () {
    this.props.getComment({current_page: this.state.current_page}).then(res => {
      const {data =[] } = res.result
      this.setState({data})
      this.cacheData = data
    })
  }
  change (page) {
    this.props.getComment({current_page: page.current}).then(res => {
      const {data =[] } = res.result
      this.setState({data})
      this.cacheData = data
    })
    this.setState({
      page: page.current
    })
  }
  componentWillMount ()  {
    this.getComent()
  }
  render() {
    const { data = [], pagination = {} } = this.props.comment.comment
    const page = {
      total: pagination.total || 0
    }
    return (
      <Layout history={this.props.history}>
        <SubTitle title="文章评论管理" />
        <Table 
          bordered dataSource={data} 
          onChange={this.change}
          columns={this.columns} 
          rowKey={record => record._id}
          pagination = {page}
        />
      </Layout>
    )
  }
}

const mapStateToProps = ({ comment }) => ({ comment })

const mapDispatchToProps = (dispatch) => {
  return {
    getComment: prams => dispatch(getComment(prams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
