import React, { useState } from 'react'
import { Menu, Icon } from 'antd'
import { menuConfig, menuType } from './menu-config'
import { RouterProps } from 'react-router'
// import { ClickParam } from 'antd/es/menu/index.d'
const { SubMenu } = Menu

interface menuProps{
  collapsed: boolean
}
export default function Munu(props: (menuProps & RouterProps)) {
  const { collapsed } = props
  const [openKeys, setOpenKeys] = useState(['article'])
  let click = (path?: string) => {
    if (path) {
      props.history.push(path)
    }
  }
  const openChange = (keys:Array<string>) => {
    if (keys.length > 1) {
      setOpenKeys(keys.slice(1))
    } else {
      setOpenKeys(keys)
    }
  }
  return (
    <Menu
      openKeys={openKeys}
      onOpenChange={openChange}
      mode="inline"
      className="menu"
      inlineCollapsed={collapsed}
    >
      {
        menuConfig.map((menu: menuType) => {
          return (
            <SubMenu
              key={menu.key}
              title={
                <span>
                  <Icon type={menu.icon} />
                  <span>{menu.title}</span>
                </span>
              }
            >
              {
                menu.children ?
                menu.children.map((item: menuType) => <Menu.Item key={item.key} onClick={() => click(item.path)}>{item.title}</Menu.Item>) :
                null
              }
            </SubMenu>
          )
        })
      }
    </Menu>
  )
}
