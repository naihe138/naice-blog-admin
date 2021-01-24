import React, { useState, useEffect } from 'react'
import { Table, Divider, message } from 'antd'
import { RouteComponentProps } from 'react-router'
import { TablePaginationConfig } from 'antd/es/table'
import { columns } from './article-config'
import PageLayout from '../../common/components/page-layout'
import { getArts, delArt } from '../../utils/api'

import './index.scss'

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const ArticleList = (props:RouteComponentProps) => {
  const [list, setList] = useState([])
  const [page, setPage] = useState({ current: 1, total: 0 })
  const [loading, setLoading] = useState(false)
  const [load, setLoad] = useState(0)
  useEffect(() => {
    (async () => {
      setLoading(true)
      const { data } = await getArts({current_page: page.current, state: 1})
      if (data.code) {
        const { list, pagination } = data.result
        setList(list || [])
        setPage({current: pagination.current_page, total: pagination.total})
      }
      setLoading(false)
    })()
  }, [load])
  // 编辑
  async function edit (id: string) {
    props.history.push(`/article-add?id=${id}`)
  }
  // 删除
  async function del (id: string) {
    const {data} = await delArt(id)
    if (data.code) {
      message.success(data.message)
      setPage({ current: 1, total: 0 })
      setLoad(load + 1)
    }
  }
  const tableColumns = columns.map(col => {
    if (col.dataIndex === 'operation') {
      return {
        ...col,
        onCell: (record:any) => ({col, record, edit, del})
      }
    }
    return col
  })
  const components = { body: { cell: TCell } }
  function tableChange (pagination: TablePaginationConfig) {
    setPage({ current: pagination.current || 1, total: pagination.total || 0 })
    setLoad(load + 1)
  }
  return <PageLayout title='文章列表'>
    <Table
      onChange={tableChange}
      components={components}
      columns={tableColumns as ColumnTypes}
      loading={loading}
      dataSource={list}
      bordered
      size="middle"
      pagination={page}
      rowKey="_id" />
  </PageLayout>
}

function TCell (props: any) {
  const { children, col } = props
  let res:any = col && col.dataIndex === 'operation' ? <Operate {...props} /> : children
  return <td>{res}</td>
}

export function Operate (props: any) {
  const { edit, del, record} = props
  const view = () => {
    console.log('view')
  }
  return (
    <div className="t_btn">
      <span onClick={view}>查看</span>
      <Divider type="vertical" />
      <span onClick={() => edit(record._id)}>修改</span>
      <Divider type="vertical" />
      <span onClick={() => del(record._id)}>删除</span>
    </div>
  )
}

export default ArticleList
