/**
 * @file
 * @author 何文林
 * @date 2017/7/6
 */
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd';
import PostList from '../postList/postList'
import './home.css'
import img from '../../assets/imgs/averter.jpg'

const {Header, Content, Footer, Sider} = Layout;
export default class SiderDemo extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render () {
    return (
      <section className="home">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo">
              <img src={img} />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
              <Menu.Item key="1">
                <Icon type="bars"/>
                <span className="nav-text">文章列表</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="plus-square-o"/>
                <span className="nav-text">添加文章</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload"/>
                <span className="nav-text">备用</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="header">naice博客后台管理系统</Header>
            <Content style={{margin: '24px 16px 0'}}>
              <div style={{
                padding: 24,
                background: '#fff',
                minHeight: 360
              }}>
                <Route exact path={`${this.props.match.url}/list`} component={PostList}/>
              </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </section>
    );
  }
}