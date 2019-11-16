import { Button } from 'antd'
import React from 'react'
import BaseInfo from './base-info'
import Edit from './edit'
import './index.scss'
import HeaderTittle from '../../common/components/header-title'
import { addArticle } from '../../utils/api'
export default function AddArticle () {
  let myform: any = null
  let content: string = ''
  let editContent: string = ''
  function submit () {
    myform.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values)
        if (content) {
          const { data } = await addArticle({...values, content, editContent})
          console.log(data)
        }
      }
    })
  }
  const editChange = (c: string, e: string) => {
    content = c
    editContent = e
  }
  const saveFormRef = (formRef: any) => {
    myform = formRef
  }
  return (
    <>
      <HeaderTittle title="添加文章" />
      <div className="p20">
        <BaseInfo wrappedComponentRef={saveFormRef} />
        <Edit content={''} editChange={editChange} />
        <div className='btnbox'>
          <Button type='primary' style={{width: '100px'}} onClick={submit}>提 交</Button>
          <Button type="primary" style={{width: '100px', marginLeft: '20px'}}>预览</Button>
          <Button type="danger" style={{width: '100px', marginLeft: '20px'}}>存草稿</Button>
        </div>
      </div>
    </>
  )
}
