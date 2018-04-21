
import React from 'react'
import {connect } from 'react-redux'
import { Table, Icon, Divider } from 'antd';

import Layout from '../components/layout'

const columns = [{
  title: '标题',
  dataIndex: 'name',
  key: 'name',
  width: 500,
  render: text => <a href="#">{text}</a>,
}, {
  title: '日期',
  dataIndex: 'age',
  width: 200,
  key: 'age',
}, {
  title: '标签',
  width: 250,
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">查看</a>
      <Divider type="vertical" />
      <a href="#">修改</a>
    </span>
  ),
}];

const data = [];

for (var i = 0; i< 10; i++) {
  data.push({
    key: i + 1,
    name: 'name' + i,
    age: i,
    address: 'address' + i,
  })
}

let page = {
  defaultCurrent: 1,
  defaultPageSize: 10,
  total: 30
}

class SketchList extends React.Component {
  render () {
    return (
      <Layout history={this.props.history}>
        <Table columns={columns} dataSource={data} pagination = {page}  />
      </Layout>
    )
  }
}

export default connect()(SketchList)

