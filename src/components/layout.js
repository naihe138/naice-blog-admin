import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import '../static/less/layout.less'

import { changePath } from '../store/layout'

const { SubMenu } = Menu
const { Content, Sider } = Layout
const averter = require("../static/images/averter.jpg")

const subArr1 = ['/', '/addArticle', '/skitch', '/class']

const subArr2 = ['/tag', '/addTag']

const subArr3 = ['/hero']

const subArr4 = ['/comment']

const subArr5 = ['/project', '/addProject']
const subArr6 = ['/music', 'addMusic']

class mLayout extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    };
    this.menu = this.menu.bind(this)
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  menu (e) {
    this.props.history.push(e.key)
    this.props.changePath(e.key)
  }
  render (children) {
    const {path} = this.props.layout
    let sub = 'sub1'
    if (subArr1.includes(path)) {
      sub = 'sub1'
    }
    if (subArr2.includes(path)) {
      sub = 'sub2'
    }
    if (subArr3.includes(path)) {
      sub = 'sub3'
    }
    if (subArr4.includes(path)) {
      sub = 'sub4'
    }
    if (subArr5.includes(path)) {
      sub = 'sub5'
    }
    if (subArr6.includes(path)) {
      sub = 'sub5'
    }
    return (
      <Layout className="gwrap">
        <Layout>
          <Sider>
            <div className="logo">
                <img src={averter} alt=""/>
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={[path]}
              defaultOpenKeys={[sub]}
              onClick = {this.menu}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="book" />文章管理</span>}>
                <Menu.Item key="/">文章列表</Menu.Item>
                <Menu.Item key="/addArticle">添加文章</Menu.Item>
                <Menu.Item key="/skitch">草稿箱</Menu.Item>
                <Menu.Item key="/class">文章分类</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="tag" />标签管理</span>}>
                <Menu.Item key="/tag">全部标签</Menu.Item>
                <Menu.Item key="/addTag">新增标签</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="schedule" />留言墙管理</span>}>
                <Menu.Item key="/hero">留言墙</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="switcher" />评论管理</span>}>
                <Menu.Item key="/comment">文章评论</Menu.Item>
              </SubMenu>
              <SubMenu key="sub5" title={<span><Icon type="appstore" />项目管理</span>}>
                <Menu.Item key="/project">全部项目</Menu.Item>
                <Menu.Item key="/addProject">新增项目</Menu.Item>
              </SubMenu>
              <SubMenu key="sub6" title={<span><Icon type="appstore" />音乐管理</span>}>
                <Menu.Item key="/music">全部音乐</Menu.Item>
                <Menu.Item key="/addMusic">新增音乐</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content className="content">
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = ({ layout }) => ({ layout })

const mapDispatchToProps = (dispatch) => {
  return {
    changePath: (path) => dispatch(changePath(path))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(mLayout);