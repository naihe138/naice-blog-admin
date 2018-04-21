
import React from 'react'
import { Table, Input, Divider, message } from 'antd'
import {connect } from 'react-redux'
import { getHero, delectHero, toEditeHero } from '../store/hero'
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

class Hero extends React.Component {
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
    this.state = { data: [] }
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
      const res = await toEditeHero(_id, {content, state})
      if (res.code === 1) {
        message.success(res.message)
        this.getHero()
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
      const res = await delectHero(_id)
      if (res.code === 1) {
        message.success(res.message)
        this.getHero()
      }
    }
  }
  getHero () {
    this.props.getHero().then(res => {
      const {list =[] } = res.result
      this.setState({data: list})
      this.cacheData = list
    })
  }
  componentWillMount ()  {
    this.getHero()
  }
  render() {
    const { list = [] } = this.props.hero.hero
    return (
      <Layout history={this.props.history}>
        <SubTitle title="评论回复管理" />
        <Table bordered dataSource={list} columns={this.columns} rowKey={record => record._id} />
      </Layout>
    )
  }
}

const mapStateToProps = ({ hero }) => ({ hero })

const mapDispatchToProps = (dispatch) => {
  return {
    getHero: prams => dispatch(getHero(prams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)
