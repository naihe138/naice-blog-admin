
import React from 'react'
import { Divider } from 'antd';

const style = {
	padding: "6px 0 20px 0",
	color: '#40a9ff'
}

class SubTitle extends React.Component {
  render () {
    return (
      <div style={this.props.title ? style : null}>
		{this.props.title || ''}
		{
			this.props.title ? <Divider type="vertical" /> : null
		}
      </div>
    )
  }
}

export default SubTitle
