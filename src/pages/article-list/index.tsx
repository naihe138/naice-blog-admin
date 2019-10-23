import React from 'react'
import { Table } from 'antd'
import { columns, data } from './article-config'

export default () => <Table columns={columns} dataSource={data} bordered size="middle" />
