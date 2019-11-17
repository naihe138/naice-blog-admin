import React from 'react'
import { Tag } from 'antd'
import { ColumnProps } from 'antd/es/table'
import dayjs from 'dayjs'
export interface recordType{
  name: string
}

interface Article<T> extends ColumnProps<T> {
  _id?: string
  tag?: string[]
}

const colorArr = ['magenta', 'geekblue', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'purple']
export const columns:Array<Article<any>> = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex+1}</span>
  },
  {
    title: '标题',
    width: 380,
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '标签',
    key: 'tag',
    width: 250,
    render: (record) => {
      return (
        <span>
          {record.tag.map((item:any, index: number) => {
            return (
              <Tag color={colorArr[index] || 'red'} key={item._id}>
                {item.name}
              </Tag>
            )
          })}
        </span>
      )
    }
  },
  {
    title: '更新日期',
    width: 250,
    dataIndex: 'update_at',
    key: 'update_at',
    render: (text) => <div>{dayjs(text).format('YYYY-MM-DD HH:mm:ss')}</div> 
  },
  {
    title: '信息',
    dataIndex: 'meta',
    key: 'meta',
    render: (meta) => <div>{`评论：${meta.comments}、浏览：${meta.views}、喜欢：${meta.likes}`}</div>
  },
  {
    title: '编辑',
    key: 'operation',
    dataIndex: 'operation',
    width: 150
  }
]
