import React from 'react'
import { Table, Icon, Divider, message } from 'antd';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getPro, delectPro } from '../store/project'
import Layout from '../components/layout'

class ArticleList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 1
    }
    this.change = this.change.bind(this)
    this.columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: 250,
        render: text => <a href="javascript:void(0)">{text}</a>,
      }, 
      {
        title: 'icon',
        dataIndex: 'icon',
        width: 130,
        key: 'icon',
        render: text => <span>{text}</span>,
      }, 
      {
        title: '预览地址',
        width: 290,
        dataIndex: 'view',
        key: 'view',
        render: text => <span>{text}</span>
      },
      {
        title: 'GitHub地址',
        width: 280,
        dataIndex: 'github',
        key: 'github',
        render: text => <span>{text}</span>
      },
      {
        title: '编辑',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to="/project">查看</Link>
            <Divider type="vertical" />
            <Link to={`/editeproject/${record._id}`}>修改</Link>
            <Divider type="vertical" />
            <a href="javascript:void(0)" onClick={() => this.del(record._id)}>删除</a>
          </span>
        ),
      }
    ]
  }

  async del(id) {
    const res = await delectPro(id)
    if (res.code === 1) {
      message.success(res.message)
      this.props.getProject({current_page: this.state.page})
    }
  }
  change (page) {
    this.props.getProject({current_page: page.current})
    this.setState({
      page: page.current
    })
  }
  componentWillMount () {
    this.props.getProject({current_page: this.state.page})
  }
  render () {
    const {list=[], pagination={}} = this.props.project.project
    const page = {
      total: pagination.total || 0,
      pageSize: 20
    }
    const columns = this.columns
    return (
      <Layout history={this.props.history}>
        <Table 
          onChange={this.change} 
          columns={columns} 
          dataSource={list} 
          pagination = {page}
          rowKey={record => record._id}
        />
      </Layout>
    )
  }
}


const mapStateToProps = ({ project }) => ({ project })

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: prams => dispatch(getPro(prams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
