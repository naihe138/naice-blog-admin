import * as React from 'react'
import BaseInfo from './base-info'
import Edit from './edit'
import './index.scss'
import { Button } from 'antd'
import HeaderTittle from '../../common/components/header-title'
export default function AddArticle () {
  return (
    <>
      <HeaderTittle title="添加文章" />
      <div className="p20">
        <BaseInfo />
        <Edit />
        <div className='btnbox'>
          <Button type='primary' style={{width: '100px'}}>提 交</Button>
          <Button type="primary" style={{width: '100px', marginLeft: '20px'}}>预览</Button>
          <Button type="danger" style={{width: '100px', marginLeft: '20px'}}>存草稿</Button>
        </div>
      </div>
    </>
  )
}
