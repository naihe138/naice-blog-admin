
import React from 'react'
import { Button } from 'antd';
import '../static/less/404.less'

class ErrorPage extends React.Component {
  render () {
    return (
      <div className="exception">
        <div className="imgBlock">
          <div className="imgEle"></div>
        </div>
        <div className="errcontent">
          <h1>404</h1>
          <div className="desc">抱歉，你访问的页面不存在</div>
          <div className="actions">
            <Button type="primary">返回首页</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorPage
