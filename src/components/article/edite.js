/**
 * @file
 * @author 何文林
 * @date 2017/7/10
 */
import React from 'react'
import { Button, message} from 'antd'
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import {getArticleById, editArticleById} from '../../action/article';
import Editor from '../markdown/editor1.js'
import '../../assets/styles/bootstrap.min.css'
import '../markdown/editor.less'

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
  _subEditor() {
    const self = this
    const id = this.props.match.params.id
    let prams = {
      id: id,
      title: self.state.title,
      tags: self.state.tags,
      describe: self.state.describe,
      editStr: editStr,
      contentStr: contentStr
    }
    store.dispatch(editArticleById(prams, (data)=>{
      message.success('修改成功');
      self._refresh(id)
    }))
  }
  _handleChange(str, event) {
    this.setState({
      [str]: event.target.value
    })
  }
  _editorChange(oldStr, newStr) {
    editStr = oldStr
    contentStr = newStr
  }
  _setData(data) {
    this.setState({
      articleStr: data.editStr,
      title: data.title,
      tags: data.tags.join(','),
      describe: data.describe
    })
    editStr = data.editStr
    contentStr = data.contentStr
  }
  _refresh(id){
    const self = this
    store.dispatch(getArticleById(id, (data)=>{
      self._setData(data.data)
    }))
  }
  componentWillMount() {
    const self = this
    const id = this.props.match.params.id
    let article = {}
    if(this.props.article.aticles){
      article = this.props.article.aticles.filter(item => item._id == id)
      this._setData(article[0])
    } else {
      this._refresh(id)
    }
  }
  render () {
    return (
      <div id="editor" className="container">
        <form>
          <h2>写文章</h2>
          <div className="editor-title">
            <input type="text" value={this.state.title} onInput={this._handleChange.bind(this, 'title')} placeholder="来，取个响亮的标题吧！"/>
          </div>
          <div className="textbox tag-input">
            <input type="text" value={this.state.tags} onInput={this._handleChange.bind(this, 'tags')} placeholder="标签，如JavaScript"/>
          </div>
          <div className="textbox tag-input">
            <textarea type="text" value={this.state.describe} onInput={this._handleChange.bind(this, 'describe')} rows={4} placeholder="文章描述"/>
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

const mapStateToProps = function(store){
  return {
    article: store.article
  }
}

export default connect(mapStateToProps)(Markdown)
