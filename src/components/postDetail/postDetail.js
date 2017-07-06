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
				<Markdown />
				<Button type="primary">Button</Button>
			</div>
			)
	}
}
export default PostDetail