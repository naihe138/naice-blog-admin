import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import PageLayout from '../../common/components/page-layout'
const Home = (props:RouteComponentProps) => {
  return <PageLayout title='首页'>
    naice blog 后台管理系统
  </PageLayout>
}


export default Home
