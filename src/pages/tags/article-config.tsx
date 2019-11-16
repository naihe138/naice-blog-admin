import React from 'react'
import { ColumnProps } from 'antd/es/table'

interface ColumnPropsEditable<T> extends ColumnProps<T> {
  editable?: boolean
}

export const columns:Array<ColumnPropsEditable<any>> = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex+1}</span>
  },
  {
    title: '标题',
    dataIndex: 'name',
    width: 400,
    key: 'name',
    editable: true
  },
  {
    title: '描述',
    key: 'descript',
    dataIndex: 'descript',
    editable: true
  },
  {
    title: '编辑',
    dataIndex: 'operation',
    width: 150
  }
]
