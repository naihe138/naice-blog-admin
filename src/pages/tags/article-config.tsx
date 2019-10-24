import React from 'react'
import { Divider } from 'antd'
import { ColumnProps } from 'antd/es/table'

export interface recordType{
  name: string
}

export interface Article {
  key: string,
  name: string,
  age: number,
  address: string
}

export const columns:ColumnProps<Article>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex}</span>
  },
  {
    title: '标签名',
    dataIndex: 'name',
    width: 500,
    key: 'name'
  },
  {
    title: '描述',
    key: 'address',
    dataIndex: 'address'
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
    render: (text, record) => (
      <div className="btnbox">
        <a href="javascript(void 0)">修改</a>
        <Divider type="vertical" />
        <a href="javascript(void 0)">删除</a>
      </div>
    )
  }
]


export const data:Article[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
]
