import React from 'react'
import { Divider, Input } from 'antd'
import { ColumnProps } from 'antd/es/table'

export interface Tags {
  descript: string
  name: string
}
interface EditableCellPrams{
  editable: boolean
  value: string,
  onChange: () => {}
}
// const EditableCell = ({ editable, value, onChange }:EditableCellPrams) => (
//   <div>
//     {editable
//       ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
//       : value
//     }
//   </div>
// )

// function renderColumns(text, record, column) {
//   return (
//     <EditableCell
//       editable={record.editable}
//       value={text}
//       onChange={value => this.handleChange(value, record._id, column)}
//     />
//   )
// }
export const columns:ColumnProps<Tags>[] = [
  {
    title: '#',
    width: 50,
    key: 'tindex',
    render: (text, record, dataIndex) => <span>{dataIndex + 1}</span>
  },
  {
    title: '标签名',
    width: 500,
    key: 'name',
    render: (text, record, dataIndex) => {
      console.log(text, record, dataIndex)
      return <div>1</div>
    }
  },
  {
    title: '描述',
    key: 'descript'
  },
  {
    title: '操作',
    key: 'action',
    width: 150,
    render: (text, record) => (
      <div className="btnbox">
        <a href="javascript(void 0)">修改</a>
        <Divider type="vertical" />
        <a href="javascript(void 0)">删除</a>
      </div>
    )
  }
]
