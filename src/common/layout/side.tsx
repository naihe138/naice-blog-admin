import React from 'react'
import { Icon } from 'antd'
import Menu from './menu'
export default function Layout() {
  let [collapsed, setCollapsed] = React.useState(false)
  const onCollapse = () => setCollapsed(!collapsed)
  return (
    <div className="side">
      <Menu collapsed={collapsed} />
      <div className="colseMenu"
        onClick={onCollapse}
        style={{width: collapsed ? '80px' : '180px'}}>
        <Icon type={collapsed ? 'left' : 'right'} />
      </div>
    </div>
  )
}
