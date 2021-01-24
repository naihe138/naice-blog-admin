import React from 'react'
import { RouterProps } from 'react-router'
import { Layout } from 'antd';
import Menu from './menu'
const { Sider } = Layout;
export default function Side(props: RouterProps) {
  let [collapsed, setCollapsed] = React.useState(false)
  const onCollapse = () => setCollapsed(!collapsed)
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu collapsed={collapsed} {...props} />
    </Sider>
  )
}
