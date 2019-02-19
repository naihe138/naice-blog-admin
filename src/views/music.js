
import React from 'react'
import { Table, Divider, message } from 'antd'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getMusic, delectMusic, toEditeMusic } from '../store/music'
import Layout from '../components/layout'
import SubTitle from '../components/subTitle'


class Music extends React.Component {
  constructor(props) {
    super(props)
    this.columns = [{
      title: '歌名',
      dataIndex: 'title',
      width: '150px'
    }, {
      title: '歌手',
      dataIndex: 'name',
      width: '150px',
    },{
      title: '海报',
      dataIndex: 'poster',
      width: '200px',
      render: text => <a href={text} target="_brank"><img width="100" src={text} /></a>
    },{
      title: '链接',
      dataIndex: 'url',
      width: '460px',
      render: text => <a href={text} target="_brank">{text}</a>
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          <div className="editable-row-operations">
            <Link to={`/editMusic/${record._id}`}>修改</Link>
            <Divider type="vertical" />
            <a onClick={() => this.del(record._id)}>删除</a>
          </div>
        )
      },
    }]
    this.state = { data: [] }
  }
  async del(_id) {
    const res = await delectMusic(_id)
    if (res.code === 1) {
      message.success(res.message)
      this.props.getMusic()
    }
  }
  componentDidMount ()  {
    this.props.getMusic()
  }
  render() {
    const { music } = this.props.music|| []
    return (
      <Layout history={this.props.history}>
        <SubTitle title="留言墙" />
        <Table bordered dataSource={music} columns={this.columns} rowKey={record => record._id} />
      </Layout>
    )
  }
}

const mapStateToProps = ({ music }) => ({ music })

const mapDispatchToProps = (dispatch) => ({getMusic: prams => dispatch(getMusic(prams))})

export default connect(mapStateToProps, mapDispatchToProps)(Music)
