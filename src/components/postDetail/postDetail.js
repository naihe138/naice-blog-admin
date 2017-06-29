import React, {Component} from 'react'
import { Button } from 'antd';
import Markdown from '../markdown/index'
class PostDetail extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<h1>文章列详情面</h1>
				<Button type="primary">Button</Button>

			</div>
			)
	}
}
export default PostDetail