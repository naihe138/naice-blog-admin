import React, { useState, useEffect } from 'react'
import { Table, message } from 'antd'
import { columns } from './article-config'
import PageLayout from '../../common/components/page-layout'
import { fetchProject, delProject } from '../../utils/api'
import { Operate } from './oprations'
import './index.scss'

function EditCell (props: any) {
  const { children, col} = props
  return <td>{col && col.dataIndex === 'operation' ? <Operate {...props} /> : children}</td>
}

const Projects = () => {
  const [tableData, setTableData] = useState([]) 
  const [refresh, setRefresh] = useState(1)
  const [page, setPage] = useState({ current: 1, total: 0 })
  useEffect(() => {
    (async () => {
      const { data } = await fetchProject({current_page: page.current})
      setTableData(data.result.list || [])
      setPage({current: data.result.pagination.current_page, total: data.result.pagination.total})
    })()
  }, [refresh])

  function edit (record:any) {
    console.log(record._id)
  }
  async function del (record:any) {
    const {data} = await delProject(record._id)
    setRefresh(refresh+1)
    setPage({ current: 1, total: 0 })
    message.success(data.message)
  }

  const tableColumns = columns.map(col => {
    if (col.dataIndex === 'operation') {
      return { ...col, onCell: (record:any, rowIndex: number) => ({col, record, edit, del, rowIndex }) }
    } else {
      return col
    }
  })
  const components = { body: { cell: EditCell } }
  return <PageLayout title='项目管理'>
    <Table components={components}
      columns={tableColumns}
      dataSource={tableData}
      bordered
      size='middle'
      rowKey='_id'
      pagination={page} />
  </PageLayout>
}

export default Projects
