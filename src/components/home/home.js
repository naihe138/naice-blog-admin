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
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import {Layout, Menu, Icon} from 'antd';

import PostList from '../postList/postList'
import addArticle from '../article/add'
import editeArtcle from '../article/edite'

import './home.css'
import img from '../../assets/imgs/averter.jpg'

const {Header, Content, Footer, Sider} = Layout;
class SiderDemo extends React.Component {
  constructor (props) {
    super(props)
    console.log(props.user)
  }
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  _goPage(e) {
    // this.props.history.push(str)
    let str = '/home'
    if (e.key == 1) {
      str = '/home'
    }
    if (e.key == 2) {
      str = '/home/add'
    }
    this.props.history.push(str)
  }
  render () {
    return (
      <section className="home">
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              // console.log(collapsed, type);
            }}
          >
            <div className="logo">
              <img src={img} />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} onClick={this._goPage.bind(this)}>
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
                <span className="nav-text">标签管理</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="upload"/>
                <span className="nav-text">评论管理</span>
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
                <Route exact path='/home' component={PostList}/>
                <Route path='/home/add' component={addArticle}/>
                <Route path='/home/editor/:id' component={editeArtcle}/>
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

const mapStateToProps = function(store) {
  return {
    user: store.user
  };
};
export default connect(mapStateToProps)(SiderDemo);