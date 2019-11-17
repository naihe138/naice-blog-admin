import React from 'react'
import { Divider } from 'antd'
import { ColumnProps } from 'antd/es/table'

export interface recordType{
  name: string
}

export const columns:ColumnProps<any>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex}</span>
  },
  {
    title: '标题',
    dataIndex: 'title',
    width: 300,
    key: 'title',
    render: text => <a href="javascript(void 0)">{text}</a>
  },
  {
    title: 'icon图标',
    key: 'icon',
    dataIndex: 'icon'
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
    width: 150
  }
]
