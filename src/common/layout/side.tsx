import React from 'react'
import { RouterProps } from 'react-router'
import { Icon } from 'antd'
import Menu from './menu'
export default function Side(props: RouterProps) {
  let [collapsed, setCollapsed] = React.useState(false)
  const onCollapse = () => setCollapsed(!collapsed)
  return (
    <div className="side">
      <Menu collapsed={collapsed} {...props} />
      <div className="colseMenu"
        onClick={onCollapse}
        style={{width: collapsed ? '80px' : '180px'}}>
        <Icon type={collapsed ? 'left' : 'right'} />
      </div>
    </div>
  )
}
