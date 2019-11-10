import React from 'react'
import { Table } from 'antd'
import { columns, data } from './music-config'
import PageLayout from '../../common/components/page-layout'

const Music = () => <PageLayout title='音乐列表'>
    <Table columns={columns} dataSource={data} bordered size="middle" />
  </PageLayout>

export default Music
