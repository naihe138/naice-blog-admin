import React, { useState, useEffect } from 'react'
import { Form, Input, Button,  Radio, message } from 'antd'
import { peojectIcon, iconType } from './config'
import BIcon from '../../common/components/bicon'
import { useQuery } from '../../utils/index'
import { addProject, editeProject } from '../../utils/api'
import './index.scss'

function AddTag (props: any) {
  const [state, setstate] = useState<any>({ ...props.project })
  useEffect(() => {
    setstate({ ...props.project })
  }, [props.project])
  const query = useQuery()
  function handleSubmit (values: any) {
    console.log(values, state)
    let id = query.get('id')
    id ? edit({
      descript: state.descript,
      github: state.github,
      icon: state.icon,
      title: state.title,
      view: state.view,
    }, id) : add()
  }

  async function add () {
    const {data} = await addProject(state)
    if (data.code) {
      message.success(data.message)
      props.history.push('/project')
    }
  }

  async function edit (values: any, id:string) {
    const { data } = await editeProject(id, values)
    if (data.code) {
      message.success(data.message)
      props.history.push('/project')
    }
  }

  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  }
  
  function inputChange(key: string, e: any) {
    const obj = Object.assign(state, {[key]: e.target.value})
    setstate({...obj})
  }
  return (
    <Form onFinish={handleSubmit} layout='horizontal' {...formItemLayout} className="addProject">
      <Form.Item label="项目名称" rules={[{ required: true, message: '请输入项目名称!' }]}>
        <Input value={state.title} placeholder="请输入项目名称" onChange={e => inputChange('title', e)} />
      </Form.Item>
      <Form.Item label="项目描述" rules={[{ required: true, message: '请填写项目描述!' }]}>
        <Input value={state.descript} placeholder="请填写项目描述" onChange={e => inputChange('descript', e)} />
      </Form.Item>
      <Form.Item label="浏览地址" rules={[{ required: true, message: '请填写项目浏览地址!' }]}>
        <Input value={state.view} placeholder="请填写项目浏览地址" onChange={e => inputChange('view', e)} />
      </Form.Item>
      <Form.Item label="github地址" rules={[{ required: true, message: '请填写项目github地址!' }]}>
        <Input value={state.github} placeholder="请填写项目github地址" onChange={e => inputChange('github', e)} />
      </Form.Item>
      <Form.Item label="项目图标" rules={[{ required: true, message: '请填icon!' }]}>
        <Radio.Group value={state.icon} onChange={e => inputChange('icon', e)} >
          {
            peojectIcon.map((icon:iconType) => (
              <Radio.Button
                value={icon.class}
                key={icon.class}>
                <BIcon type={icon.class}></BIcon>
              </Radio.Button>
            ))
          }
        </Radio.Group>
      </Form.Item>
      <div  className="btnbox">
        <Button type="primary" htmlType="submit">提交</Button>
      </div>
    </Form>
  )
}

export default AddTag

