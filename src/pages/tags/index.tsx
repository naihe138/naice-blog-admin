import React from 'react'
import { Table } from 'antd'
import { columns, data } from './article-config'
import PageLayout from '../../common/components/page-layout'
const Tag = () => <>
  <PageLayout title='标签列表'>
    <Table columns={columns} dataSource={data} bordered size="middle" />
  </PageLayout>
</>

export default Tag
