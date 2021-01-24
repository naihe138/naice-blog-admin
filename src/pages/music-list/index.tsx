import React, { useState, useEffect } from 'react'
import { Table, message } from 'antd'
import { columns } from './music-config'
import PageLayout from '../../common/components/page-layout'
import { fetchMusic, delMusic } from '../../utils/api'
import { Operate } from './oprations'
import './index.scss'

function EditCell (props: any) {
  const { children, col} = props
  return <td>{col && col.dataIndex === 'operation' ? <Operate {...props} /> : children}</td>
}

const Projects = (props:any) => {
  const [tableData, setTableData] = useState([]) 
  const [refresh, setRefresh] = useState(1)
  const [page, setPage] = useState({ current: 1, total: 0 })
  useEffect(() => {
    (async () => {
      const { data } = await fetchMusic({current_page: page.current})
      setTableData(data.result || [])
      // setPage({current: data.result.pagination.current_page, total: data.result.pagination.total})
    })()
  }, [refresh])

  function edit (id:string) {
    props.history.push(`/music-add?id=${id}`)
  }
  async function del (id:string) {
    const {data} = await delMusic(id)
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
  return <PageLayout title='音乐管理'>
    <Table components={components}
      className="music-list"
      columns={tableColumns as any}
      dataSource={tableData}
      bordered
      size='middle'
      rowKey='_id'
      pagination={page} />
  </PageLayout>
}

export default Projects
