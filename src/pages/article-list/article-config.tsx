import React from 'react'
import { Divider, Tag } from 'antd'
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
}

export const columns:ColumnProps<Article>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex}</span>
  },
  {
    title: '标题',
    dataIndex: 'name',
    width: 500,
    key: 'name',
    render: text => <a href="javascript(void 0)">{text}</a>
  },
  {
    title: '标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags:string[]) => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </span>
    )
  },
  // {
  //   title: '时间',
  //   dataIndex: 'time',
  //   width: 130,
  //   key: 'time',
  //   render: text => <a>{text}</a>
  // },
  {
    title: '编辑',
    key: 'action',
    width: 150,
    render: (text, record) => (
      <div className="btnbox">
        <a href="javascript(void 0)">查看</a>
        <Divider type="vertical" />
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
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }
]
