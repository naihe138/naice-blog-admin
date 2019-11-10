import React from 'react'
import { Table } from 'antd'
import { columns, data } from './article-config'
import PageLayout from '../../common/components/page-layout'

const ArticleComment = () => <PageLayout title='文章评论'>
    <Table columns={columns} dataSource={data} bordered size="middle" />
  </PageLayout>

export default ArticleComment
