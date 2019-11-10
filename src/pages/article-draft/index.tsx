import React from 'react'
import { Table } from 'antd'
import { columns, data } from './article-config'

import PageLayout from '../../common/components/page-layout'

const ArticleDraft = () => <>
  <PageLayout title='草稿箱'>
    <Table columns={columns} dataSource={data} bordered size="middle" />
  </PageLayout>
</>

export default ArticleDraft
