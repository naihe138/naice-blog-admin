import React, { useState, useEffect } from 'react'
import { Table, Input } from 'antd'
import { columns } from './article-config'
import PageLayout from '../../common/components/page-layout'
import { fetchTag, editeTag, delTag } from './server'
import { Operate } from './oprations'
import './index.scss'

const editPrams: any = {}

function EditCell (props: any) {
  const { editing, children, col, rowIndex, record} = props
  let res:any = null
  if (col && col.editable && col.editable) {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
      editPrams[col.key] = e.currentTarget.value
      editPrams.index = rowIndex
    }
    res = editing ? <Input defaultValue={record[col.key]} onChange={change} /> : <div>{record[col.key]}</div>
  } else {
    res = col && col.dataIndex === 'operation' ? <Operate {...props} editing={editing} /> : children
  }
  return <td>{res}</td>
}

const Tag = () => {
  const [tableData, setTableData] = useState([]) 
  const [editingKey, setEditingKey] = useState()
  const [refresh, setRefresh] = useState(1)
  useEffect(() => {
    (async () => {
      const { data } = await fetchTag()
      setTableData(data.result.list || [])
      cancel()
    })()
  }, [refresh])
  async function save (record:any) {
    if (editPrams.index === null) return
    let prams = {...record, ...editPrams}
    await editeTag({_id: prams._id, name: prams.name, descript: prams.descript})
    prams = null
    setRefresh(refresh+1)
  }
  function edit (index:number) {
    editPrams.index = null
    setEditingKey(index)
  }
  function cancel () {
    setEditingKey('')
  }
  async function del (record:any) {
    if (editPrams.index === null) return
    await delTag(record._id)
    setRefresh(refresh+1)
  }

  function isEditing (index:number) {
    return index === editingKey
  }

  const tableColumns = columns.map(col => {
    if (col.editable) {
      return {
        ...col,
        onCell: (record:any, rowIndex: number) => ({ record, col, rowIndex, editing: isEditing(rowIndex) })
      }
    } else if (col.dataIndex === 'operation') {
      return { ...col, onCell: (record:any, rowIndex: number) => ({col, record, save, edit, cancel, del, rowIndex, editing: isEditing(rowIndex) }) }
    } else {
      return col
    }
  })
  const components = { body: { cell: EditCell } }
  return <>
    <PageLayout title='标签列表'>
      <Table components={components} columns={tableColumns} dataSource={tableData} bordered size='middle' rowKey='name' />
    </PageLayout>
  </>
}

export default Tag
