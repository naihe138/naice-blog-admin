import React from 'react'
import { ColumnProps } from 'antd/es/table'

export interface recordType{
  name: string
}

export const columns:ColumnProps<any>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex + 1}</span>
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 150,
    key: 'title',
    render: (text, record, dataIndex) => {
      return <a href={record.github} target="_blank">{text}</a>
    }
  },
  {
    title: 'icon图标',
    key: 'icon',
    dataIndex: 'icon',
    width: 200,
  },
  {
    title: '预览地址',
    key: 'view',
    dataIndex: 'view'
  },
  {
    title: 'github地址',
    key: 'github',
    dataIndex: 'github'
  },
  {
    title: '编辑',
    key: 'operation',
    dataIndex: 'operation',
    width: 120
  }
]
