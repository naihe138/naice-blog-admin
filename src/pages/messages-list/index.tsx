import React from 'react'
import { Table } from 'antd'
import { columns, data } from './article-config'
import PageLayout from '../../common/components/page-layout'

const Message = () => <PageLayout title='留言区列表'>
    <Table columns={columns} dataSource={data} bordered size="middle" />
  </PageLayout>

export default Message
