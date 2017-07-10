import React, {Component} from 'react'
import {Table, Icon} from 'antd';
const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title',
  width: '80%',
  render: (text, record, index) => {
    console.log(record)
    return (
      <a href={`http:baidu.com?id=${record.key}`}>{text}</a>
    )
  },
},
  {
    title: '操作',
    key: 'action',
    width: '20%',
    render: (text, record) => (
      <span>
        <a href="#">编辑</a>
        <span className="ant-divider"/>
        <a href="#" className="ant-dropdown-link">删除</a>
        <span className="ant-divider"/>
        <a href="#">评论</a>
      </span>
    )
  }];
const data = [
  {
    key: '1',
    title: 'John Brown'
  }, {
    key: '2',
    title: 'Jim Green',
  }, {
    key: '3',
    title: 'Joe Black',
  },
  {
    key: '4',
    title: 'Joe Black2',
  }];
class PostList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  handleTableChange(e){
    console.log(e)
  }
  render () {
    return (
      <section>
        <Table loading={this.state.loading}
               columns={columns}
               dataSource={data}
               pagination={{pageSize: 2}}
               onChange={this.handleTableChange}/>
      </section>
    )
  }
}
export default PostList
