
import React from 'react'
import { Timeline } from 'antd';
import {connect } from 'react-redux'
import Layout from '../components/layout'
import SubTitle from '../components/subTitle'

class ArticleClass extends React.Component {
  render() {
    return (
      <Layout history={this.props.history}>
        <SubTitle title="文章分类" />
        <Timeline>
          <Timeline.Item color="green">简历网站 2015-09-01</Timeline.Item>
          <Timeline.Item color="green">发布网站 2015-09-01</Timeline.Item>
          <Timeline.Item color="red">
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </Timeline.Item>
          <Timeline.Item>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </Timeline.Item>
        </Timeline>
      </Layout>
    );
  }
}

export default connect()(ArticleClass)
