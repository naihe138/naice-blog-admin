import React from 'react'
import { Table, Icon, Divider, message } from 'antd';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getArticle, delectArticle } from '../store/article'
import Layout from '../components/layout'

const toDate = str => {
  const date = new Date(str)
  return `${date.getFullYear()} -${date.getMonth()+1}- ${date.getDate()}`
}

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
        width: 500,
        render: text => <a href="javascript:void(0)">{text}</a>,
      }, 
      {
        title: '日期',
        dataIndex: 'update_at',
        width: 200,
        key: 'update_at',
        render: text => <span>{toDate(text)}</span>,
      }, 
      {
        title: '标签',
        width: 250,
        dataIndex: 'tag',
        key: 'tag',
        render: arr => (
          <span>
            {arr.map(item => 
              <i key={item._id} style={{paddingRight: '15px'}}>{item.name}</i>
            )}
          </span>
        )
      },
      {
        title: '编辑',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to="/">查看</Link>
            <Divider type="vertical" />
            <Link to={`/edite/${record._id}`}>修改</Link>
            <Divider type="vertical" />
            <a href="javascript:void(0)" onClick={() => this.del(record._id)}>删除</a>
          </span>
        ),
      }
    ]
  }

  async del(id) {
    const res = await delectArticle(id)
    if (res.code === 1) {
      message.success(res.message)
      this.props.getArticle({current_page: this.state.page})
    }
  }
  change (page) {
    this.props.getArticle({current_page: page.current})
    this.setState({
      page: page.current
    })
  }
  componentWillMount () {
    this.props.getArticle({current_page: this.state.page})
  }
  render () {
    const {list=[], pagination={}} = this.props.articleList.article
    const page = {
      total: pagination.total || 0
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


const mapStateToProps = ({ articleList }) => ({ articleList })

const mapDispatchToProps = (dispatch) => {
  return {
    getArticle: prams => dispatch(getArticle(prams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
