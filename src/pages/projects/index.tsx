import React from 'react'
import { Table } from 'antd'
import { columns, data } from './article-config'
import PageLayout from '../../common/components/page-layout'

const Project = () => <PageLayout title='项目列表'>
    <Table columns={columns} dataSource={data} bordered size="middle" />
  </PageLayout>

export default Project
