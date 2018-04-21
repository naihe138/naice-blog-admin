
import React from 'react'
import { Table, Input, Divider, message } from 'antd'
import {connect } from 'react-redux'
import { getTag, toEditeTag, delectTag } from '../store/article'
import SubTitle from '../components/subTitle'
import Layout from '../components/layout'

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
)


class Tag extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [{
      title: '标签名',
      dataIndex: 'name',
      width: '30%',
      render: (text, record) => this.renderColumns(text, record, 'name'),
    }, {
      title: '描述',
      dataIndex: 'descript',
      width: '40%',
      render: (text, record) => this.renderColumns(text, record, 'descript'),
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
    this.state = { 
      data: []
    }
    this.cacheData = []
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
  handleChange(value, id, column) {
    const newData = [...this.state.data]
    const target = newData.filter(item => id === item._id)[0]
    if (target) {
      target[column] = value
      this.setState({ data: newData })
    }
  }
  edit(id) {
    const newData = [...this.state.data]
    const target = newData.filter(item => id === item._id)[0]
    if (target) {
      target.editable = true
      this.setState({ data: newData }) 
    }
  }
  async del(record) {
    const { _id } = record
    const res = await delectTag(_id)
    if (res.code === 1) {
      message.success(res.message)
      this.getTag()
    }
  }
  async save(record) {
    const { _id } = record
    const newData = [...this.state.data]
    const target = newData.filter(item => _id === item._id)[0]
    if (target) {
      delete target.editable
      const {name, descript} = target
      const res = await toEditeTag({name, descript, _id})
      if (res.code === 1) {
        message.success(res.message)
        this.getTag()
      }
    }
  }
  cancel(id) {
    const newData = [...this.state.data]
    const target = newData.filter(item => id === item._id)[0]
    if (target) {
      Object.assign(target, this.cacheData.filter(item => id === item._id)[0])
      delete target.editable
      this.setState({ data: newData })
    }
  }
  getTag () {
    this.props.getTag().then(res=> {
      this.setState({
        data: res.result.list
      })
      this.cacheData = res.result.list
    })
  }
  componentWillMount () {
    this.getTag()
  }
  render() {
    const {list = []} = this.props.articleList.tags
    return (
      <Layout history={this.props.history}>
        <SubTitle title="全部标签" />
        <Table bordered dataSource={list} columns={this.columns} rowKey={record => record._id} />
      </Layout>
    )
  }
}

const mapStateToProps = ({ articleList }) => ({ articleList })

const mapDispatchToProps = (dispatch) => {
  return {
    getTag: prams => dispatch(getTag(prams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tag)
