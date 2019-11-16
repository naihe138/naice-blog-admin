import React, { useState, useEffect } from 'react'
import { Menu, Icon } from 'antd'
import { menuConfig, menuType } from './menu-config'
import { RouteProps, RouterProps } from 'react-router'
// import { ClickParam } from 'antd/es/menu/index.d'
const { SubMenu } = Menu
interface menuProps{
  collapsed: boolean
}

export default function Munu(props: (menuProps & RouteProps & RouterProps)) {
  const { collapsed } = props
  const [openKey, setOpenKey] = useState([''])
  const click = (path?: string) => {
    if (path) {
      props.history.push(path)
    }
  }
  const open = (path: string) => {
    setOpenKey([path])
  }
  useEffect(() => {
    if (props.location) {
      const arr = props.location.pathname.substring(1).split('-')
      setOpenKey([arr[0]])
    }
  }, [])
  return (
    <Menu
      theme='dark'
      openKeys={openKey}
      mode="inline"
      className="menu"
      inlineCollapsed={collapsed}
    >
      {
        menuConfig.map((menu: menuType) => {
          if (!menu.children) {
            return <Menu.Item key={menu.key} onClick={() => click(menu.path)}>
              <Icon type={menu.icon} />
              <span>{menu.title}</span>
            </Menu.Item>
          } else {
            return (
              <SubMenu
                key={menu.key}
                title={
                  <span>
                    <Icon type={menu.icon} />
                    <span>{menu.title}</span>
                  </span>
                }
                onTitleClick={() => open(menu.key)}
              >
                {
                  menu.children ?
                  menu.children.map((item: menuType) => <Menu.Item key={item.key} onClick={() => click(item.path)}>{item.title}</Menu.Item>) :
                  null
                }
              </SubMenu>
            )
          }
        })
      }
    </Menu>
  )
}
