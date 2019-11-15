import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { columns } from './article-config'
import PageLayout from '../../common/components/page-layout'
import { fetchTag } from './server'
const Tag = () => {
  const [tableData, setTableData] = useState([]) 
  useEffect(() => {
    (async () => {
      const { data } = await fetchTag()
      setTableData(data.result.list || [])
    })()
  }, [])
  return <>
    <PageLayout title='标签列表'>
      <Table columns={columns} dataSource={ tableData } bordered size='middle' rowKey='_id' />
    </PageLayout>
  </>
}

export default Tag
