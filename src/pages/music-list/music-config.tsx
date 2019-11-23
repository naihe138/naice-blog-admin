import React from 'react'
import { ColumnProps } from 'antd/es/table'

export const columns:ColumnProps<any>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex + 1}</span>
  },
  {
    title: '歌名',
    dataIndex: 'title',
    width: 160,
    key: 'title',
    render: (text, record, dataIndex) => <a href={record.url} target="_blank">{text}</a>
  },
  {
    title: '歌手',
    key: 'name',
    width: 100,
    dataIndex: 'name'
  },
  {
    title: '海报',
    key: 'poster',
    width: 120,
    dataIndex: 'poster',
    render: text => <a href={text} target="_brank"><img width="50" src={text} /></a>
  },
  {
    title: '歌曲链接',
    key: 'url',
    dataIndex: 'url',
    width: 320,
    render: text => <a href={text} target="_blank" className="url">{text}</a>
  },
  {
    title: '操作',
    key: 'operation',
    width: 150,
    dataIndex: 'operation'
  }
]
