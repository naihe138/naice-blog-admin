/**
 * @file
 * @author 何文林
 * @date 2017/7/10
 */
import React from 'react'
import { Button } from 'antd';
import Editor from '../markdown/editor1.js'
import '../../assets/styles/bootstrap.min.css'
import '../markdown/editor.less'
class Markdown extends React.Component{
  constructor(props){
    super(props)
    this.state={
      testStr: `123**加粗文字**
_斜体文字_

> 引用123

123
1. 有序列表项0
2. 有序列表项1

\`\`\`
  asdasd
\`\`\`
`
    }
  }
  _handleClick () {
    alert('这个是自定义按钮')
  }
  _subEditor() {
    console.log(123)
  }
  _editorChange(oldStr, newStr) {
    console.log(oldStr)
    console.log(newStr)
  }
  render () {
    return (
      <div id="editor" className="container">
        <form>
          <h2>写文章</h2>
          <div className="editor-title">
            <input type="text" placeholder="来，取个响亮的标题吧！"/>
          </div>
          <div className="textbox tag-input">
            <input type="text" placeholder="标签，如JavaScript"/>
          </div>
          <Editor content={this.state.testStr} editorChange={this._editorChange}>
            <option title="自定义按钮" onClick={this._handleClick}><i className="fa fa-bomb"></i></option>
          </Editor>
          <div className="subEditor">
            <Button type="primary" size={'large'} onClick={this._subEditor.bind(this)}>提交</Button>
            <span className="help-text">提交文章</span>
          </div>
        </form>
      </div>
    )
  }
}

export default Markdown
