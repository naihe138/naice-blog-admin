import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { menuConfig, menuType } from './menu-config'
import { RouteProps, RouterProps } from 'react-router'
const { SubMenu } = Menu
interface menuProps{
  collapsed: boolean
}

export default function Munu(props: (menuProps & RouteProps & RouterProps)) {
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
  }, [props.location])
  return (
    <Menu
      mode="inline"
      theme='dark'
      openKeys={openKey}
      className="menu"
    >
      {
        menuConfig.map((menu: menuType) => {
          if (!menu.children) {
            return <Menu.Item key={menu.key} icon={<menu.icon />} onClick={() => click(menu.path)}>
              <span>{menu.title}</span>
            </Menu.Item>
          } else {
            return (
              <SubMenu
                key={menu.key}
                icon={<menu.icon />}
                title={
                  <span>
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
