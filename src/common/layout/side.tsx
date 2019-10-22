import React from 'react'
import { Menu, Icon } from 'antd'
import { menuConfig, menuType } from './menu-config'
import { ClickParam } from 'antd/es/menu/index.d'
const { SubMenu } = Menu
export default function Layout() {

  let [collapsed, setCollapsed] = React.useState(false)

  let onCollapse = () => {
    setCollapsed(!collapsed)
  }

  let click = (e: ClickParam) => {
    console.log(e)
  }
  return (
    <div className="side">
      <Menu
        defaultSelectedKeys={['article-list']}
        defaultOpenKeys={['article']}
        mode="inline"
        className="menu"
        inlineCollapsed={collapsed}
        onClick={click}
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
                  menu.children.map((item: menuType) => <Menu.Item key={item.key}>{item.title}</Menu.Item>) :
                  null
                }
              </SubMenu>
            )
          })
        }
      </Menu>
      <div className="colseMenu" onClick={onCollapse} style={{width: collapsed ? '80px' : '180px'}}>
        <Icon type={collapsed ? 'left' : 'right'} />
      </div>
    </div>
  )
}
