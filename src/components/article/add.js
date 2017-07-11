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
import store from '../../redux/store.js';
import {addArticle} from '../../action/article.js';
let editStr = '';
let contentStr = '';
class Markdown extends React.Component{
  constructor(props){
    super(props)
    this.state={
      articleStr: '',
      title: '',
      tags: '',
      describe: ''
    }
  }
  _handleClick () {
    alert('这个是自定义按钮')
  }
  _handleChange(str, event) {
    this.setState({
      [str]: event.target.value
    })
  }
  _subEditor() {
    const self = this
    if (!this.state.title || !this.state.tags || !this.state.describe || !editStr) {
      alert('所用选项不能为空')
      return
    }
    store.dispatch(addArticle({
      title: self.state.title,
      tags: self.state.tags,
      describe: self.state.describe,
      editStr,
      contentStr
    }, (data) => {
      console.log(data)
    }))
  }
  _editorChange(oldStr, newStr) {
    editStr = oldStr
    contentStr = newStr
  }
  render () {
    return (
      <div id="editor" className="container">
        <form>
          <h2>写文章</h2>
          <div className="editor-title">
            <input type="text" onInput={this._handleChange.bind(this, 'title')} placeholder="来，取个响亮的标题吧！"/>
          </div>
          <div className="textbox tag-input">
            <input type="text" onInput={this._handleChange.bind(this, 'tags')} placeholder="标签，如JavaScript"/>
          </div>
          <div className="textbox tag-input">
            <textarea type="text" onInput={this._handleChange.bind(this, 'describe')} rows={4} placeholder="文章描述"/>
          </div>
          <Editor content={this.state.articleStr} editorChange={this._editorChange}>
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
