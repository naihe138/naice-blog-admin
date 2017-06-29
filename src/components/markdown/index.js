import React from 'react'
import Editor from './editor.js'

import '../../assets/styles/bootstrap.min.css'
console.log(Editor)
class Markdown extends React.Component{
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
          <Editor>
            <option title="自定义按钮" onClick={this._handleClick}><i className="fa fa-bomb"></i></option>
          </Editor>
          <div>
            <button className="btn primary">提交</button>
            <span className="help-text">这是一条提示信息</span>
          </div>
        </form>
      </div>
    )
  }
  _handleClick () {
    /* eslint-disable no-alert */
    alert('这个是自定义按钮')
    /* eslint-enable no-alert */
  }
}

export default Markdown