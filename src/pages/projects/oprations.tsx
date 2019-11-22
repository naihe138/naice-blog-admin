import React from 'react'
import { Divider, Button } from 'antd'
export function Operate (props: any) {
  const { record} = props
  return (
    <div className="btnbox">
      <Button type="link" onClick={() => props.edit(record._id)}>编辑</Button>
      <Divider type="vertical" />
      <Button type="link" onClick={() => props.del(record._id)}>删除</Button>
    </div>
  )
}
