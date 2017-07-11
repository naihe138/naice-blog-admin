import React, {Component} from 'react'
import {Table, Icon} from 'antd';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import {getArticle} from '../../action/article'
class PostList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      page: 0,
      data: []
    }
    this.columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: '80%',
        render: (text, record, index) => {
          return (
            <a onClick={this.goDetail.bind(this, record._id)}>{text}</a>
          )
        },
      },
      {
        title: '操作',
        key: 'action',
        width: '20%',
        render: (text, record) => (
          <span>
            <a onClick={this.goDetail.bind(this, record._id)}>编辑</a>
            <span className="ant-divider"/>
            <a href="#" className="ant-dropdown-link">删除</a>
            <span className="ant-divider"/>
            <a href="#">评论</a>
          </span>
        )
      }
    ]
  }

  goDetail (id) {
    this.props.history.push(`/home/editor/${id}`)
  }

  handleTableChange (e) {
    console.log(e)
  }
  _getList() {
    let page = this.state.page
    store.dispatch(getArticle({page}, (data)=> {
      console.log(data)
    }))
  }
  componentDidUpdate() {
    
  }
  componentDidMount(){
    this._getList()
  }
  render () {
    const columns = this.columns;
    return (
      <section>
        <Table loading={this.state.loading}
               columns={columns}
               dataSource={this.props.article.aticles || []}
               pagination={{pageSize: 10}}
               onChange={this.handleTableChange}/>
      </section>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    article: store.article
  };
};

export default connect(mapStateToProps)(PostList)
