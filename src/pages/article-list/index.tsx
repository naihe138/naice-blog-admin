import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { columns } from './article-config'
import PageLayout from '../../common/components/page-layout'
import { getArts } from '../../utils/api'
import './index.scss'
const ArticleList = () => {
  const [list, setList] = useState([])
  const [page, setPage] = useState({
    current: 1,
    total: 0
  })
  useEffect(() => {
    (async () => {
      const { data } = await getArts({current_page: page.current})
      if (data.code) {
        const { list, pagination } = data.result
        setList(list || [])
        setPage({current: pagination.current_page, total: pagination.total})
      }
      console.log(data)
    })()
  }, [])

  return <PageLayout title='文章列表'>
    <Table columns={columns}
      dataSource={list}
      bordered
      size="middle"
      pagination={page}
      rowKey="_id" />
  </PageLayout>
}
export default ArticleList
