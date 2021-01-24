import React from 'react'
import { Card, Col, Row } from 'antd';
import './index.scss'
import PageLayout from '../../common/components/page-layout'
const Home = () => {
  function getRadom(unit: number) {
    const limit = (Math.pow(10, unit) * Math.random()).toString();
    return parseInt(limit);
  }
  return <PageLayout title='首页'>
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={6}>
          <Card title="总访问量" extra={<span className="day">日</span>}>
            <p className="viewdata">{getRadom(4)}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="总评论数" extra={<span className="day">日</span>}>
            <p className="viewdata">{getRadom(2)}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="总留言数" extra={<span className="day">日</span>}>
            <p className="viewdata">{getRadom(2)}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="关于页访问量" extra={<span className="day">日</span>}>
            <p className="viewdata">{getRadom(4)}</p>
          </Card>
        </Col>
      </Row>
      
    </div>
  </PageLayout>
}


export default Home
