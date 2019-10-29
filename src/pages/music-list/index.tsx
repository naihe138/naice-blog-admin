import React from 'react'
import { Table } from 'antd'
import { columns, data } from './music-config'

export default () => <Table columns={columns} dataSource={data} bordered size="middle" />
