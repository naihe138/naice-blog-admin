import React, {Component} from 'react'
import { Affix, Button } from 'antd';

class PostList extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
		    <Affix>
		      <Button type="primary">文章列表页面</Button>
		    </Affix>
		    <br />
		    <Affix offsetBottom={0}>
		      <Button type="primary">Affix bottom</Button>
		    </Affix>
		  </div>
			)
	}
}
export default PostList
