import React, { useEffect, useState } from 'react'
import { Button, message } from 'antd'
import BaseInfo from './base-info'
import Edit from './edit'
import './index.scss'
import HeaderTittle from '../../common/components/header-title'
import { addArticle, editeArt, getArtId } from '../../utils/api'
import { useLocation } from 'react-router-dom'
import { useQuery } from '../../utils/index'
import { RouteComponentProps } from 'react-router'

export default function AddArticle (props: RouteComponentProps) {
  let myform: any = null
  const [acontent, setAcontent] = useState({content: '', editContent: ''})
  const [article, setArticle] = useState({})
  const [editContent, setEditContent] = useState('')
  const [title, setTitle] = useState('')
  const query = useQuery()
  let location = useLocation()
  function submit (state: number) {
    myform.props.form.validateFields(async (err: any, values: any) => {
      if (!err && acontent.content) {
        let id = query.get('id')
        if (id) {
          edit(values, id)
        } else {
          add(values, state)
        }
      }
    })
  }
  async function add (values: any, state:number) {
    const { data } = await addArticle({...values, ...acontent, state})
    if (data.code) {
      message.success(data.message)
      props.history.push('/article')
    }
  }
  async function edit (values: any, id: string) {
    const { data } = await editeArt(id, {...values, ...acontent})
    if (data.code) {
      message.success(data.message)
      props.history.push('/article')
    }
  }
  const editChange = (c: string, e: string) => {
    setAcontent({content: c, editContent: e})
  }
  const saveFormRef = (formRef: any) => { myform = formRef }
  // 获取编辑数据
  useEffect(() => {
    (async () => {
      const id = query.get('id')
      if (id) {
        const { data } = await getArtId(id)
        if (data.code) {
          setArticle(data.result)
          setEditContent(data.result.content)
          setTitle('编辑文章')
          setAcontent({content: data.result.content, editContent: data.result.editContent})
        }
      } else {
        setArticle({})
        setEditContent('')
        setTitle('添加文章')
        setAcontent({content: '', editContent: ''})
      }
    })()
  }, [location])

  return (
    <>
      <HeaderTittle title={title} />
      <div className="p20">
        <BaseInfo wrappedComponentRef={saveFormRef} article={article} />
        <Edit content={editContent} editChange={editChange} />
        <div className='btnbox'>
          <Button type='primary' style={{width: '100px'}} onClick={() => submit(1)}>提 交</Button>
          <Button type="primary" style={{width: '100px', marginLeft: '20px'}}>预览</Button>
          <Button type="danger" style={{width: '100px', marginLeft: '20px'}} onClick={() => submit(2)}>存草稿</Button>
        </div>
      </div>
    </>
  )
}
