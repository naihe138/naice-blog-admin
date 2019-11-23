import React from 'react'
import { ColumnProps } from 'antd/es/table'

interface Comments<T> extends ColumnProps<T> {
  _id?: string
  editable?: boolean
}

export const columns:Comments<any>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex}</span>
  },
  {
    title: '留言内容',
    dataIndex: 'content',
    width: 300,
    key: 'content'
  },
  {
    title: 'ip地址',
    key: 'ip',
    dataIndex: 'ip',
    width: 200,
  },
  {
    title: '留言邮箱',
    key: 'author.email',
    dataIndex: 'author.email',
    width: 200,
    render: (text, record, dataIndex) => <span>{record.author.email}</span>
  },
  {
    title: 'web地址',
    key: 'author.site',
    dataIndex: 'author.site',
    width: 300,
    render: (text, record, dataIndex) => <span>{record.author.site}</span>
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    editable: true,
    width: 100,
  },
  {
    title: '编辑',
    key: 'operation',
    dataIndex: 'operation',
    width: 100
  }
]
