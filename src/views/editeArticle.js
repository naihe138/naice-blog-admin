
import React from 'react'
import { Input, Select, Button, message } from 'antd'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import Editor from '../components/markdown'
import SubTitle from '../components/subTitle'
import { editeArticle, getTag, getArticleId } from '../store/article'
import '../static/less/article.less'

const { TextArea } = Input;
const Option = Select.Option;
let eTimer = null
class addArticleComponent extends React.Component {
  constructor(props){
    super(props)
    this.state={
      content: '',
      title: '',
      descript: '',
      editContent: '',
      keyword: '',
      tag: []
    }
    this.sub = this.sub.bind(this)
    this.toTitleChange = this.toTitleChange.bind(this)
    this._editorChange = this._editorChange.bind(this)
    this.selectTag = this.selectTag.bind(this);
  }
  _editorChange(content, outcontent) {
    clearInterval(eTimer)
    eTimer = setTimeout(()=> {
      this.setState({
        content: content,
        editContent: outcontent
      })
    }, 60)
  }
  toTitleChange(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }
  selectTag(id) {
    let arr = [...this.state.tag]
    let index = arr.indexOf(id)
    if (index >= 0) {
      arr.splice(index, 1)
    } else {
      arr.push(id)
    }
    this.setState({
      tag: arr
    })
  } 
  async sub () {
    const { id } = this.props.match.params
    const res = await editeArticle(id, {...this.state})
    if (res.code === 1) {
      message.success(res.message)
      this.props.history.push('/')
    }
  }
  componentWillMount () {
    const { id } = this.props.match.params
    this.props.getTag()
    getArticleId(id).then(res => {
      const { content,title, descript, editContent, keyword, tag } = res.result
      let _tag = tag.map(item => item._id)
      this.setState({
        content,
        title,
        descript,
        editContent,
        keyword,
        tag: _tag
      })
    })
  }
  render () {
    const { list = [] } = this.props.articleList.tags
    return (
      <Layout history={this.props.history}>
        <SubTitle title="修改文章" />
        <Input
          value={this.state.title}
          onChange={e => this.toTitleChange('title', e)}
          placeholder="请输入一个响亮的标题吧"
        />
        <TextArea 
          value={this.state.descript}
          style={{"marginTop": "24px"}}
          rows={2} 
          onChange={e => this.toTitleChange('descript', e)}
          placeholder="给你的文章做个描述"
        />
        <Input
          value={this.state.keyword}
          style={{"margin": "24px 0"}} 
          onChange={e => this.toTitleChange('keyword', e)}
          placeholder="请输入关键字用逗号分开（,）"
        />
        <div className="art_tags">
          {
            list.map(item => {
              return <span 
                      className={this.state.tag.includes(item._id) ? 'active' : ''}
                      onClick={(e) => this.selectTag(item._id, e)}
                      key={item._id}
                      >{item.name}</span>
            })
          }
        </div>
        <Editor content={this.state.content} editorChange={this._editorChange} />
        <div style={{"margin": "24px 0"}}>
          <Button 
            style={{"float": "right"}} 
            type="primary" 
            size="large"
            onClick={this.sub}
          >提交</Button>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = ({ articleList }) => ({ articleList })

const mapDispatchToProps = (dispatch) => {
  return {
    getTag: prams => dispatch(getTag(prams))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addArticleComponent)
