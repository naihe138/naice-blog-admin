import * as React from 'react'
import BaseInfo from './base-info'
import Edit from './edit'
import './index.scss'
import { Button } from 'antd'
export default function AddArticle () {
  return (
    <>
      <BaseInfo />
      <Edit />
      <div className='btnbox'>
        <Button type='primary' style={{width: '100px'}}>提交</Button>
      </div>
    </>
  )
}

