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
  address: string,
  tags: string[],
  status: Number
}

export const columns:ColumnProps<Article>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex}</span>
  },
  {
    title: '留言内容',
    dataIndex: 'name',
    width: 300,
    key: 'name',
    render: text => <a href="javascript(void 0)">{text}</a>
  },
  {
    title: 'ip',
    key: 'tags',
    dataIndex: 'tags'
  },
  {
    title: '留言邮箱',
    key: 'age',
    dataIndex: 'tags'
  },
  {
    title: 'web地址',
    key: 'address',
    dataIndex: 'tags'
  },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'tags'
  },
  {
    title: '编辑',
    key: 'action',
    width: 150,
    render: (text, record) => (
      <div className="btnbox">
        <a href="javascript(void 0)">编辑</a>
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
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    status: 1
  }
]
