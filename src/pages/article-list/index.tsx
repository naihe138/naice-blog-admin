import React from 'react'
import { Table } from 'antd'
import { columns, data } from './article-config'
import PageLayout from '../../common/components/page-layout'

const ArticleList = () => <>
  <PageLayout title='文章列表'>
    <Table columns={columns} dataSource={data} bordered size="middle" />
  </PageLayout>
</>
export default ArticleList
