
import React from 'react'
import { Form , Input, Button, message, Tag } from 'antd';
import { connect } from 'react-redux'
import Layout from '../components/layout'
import SubTitle from '../components/subTitle'
import { addPro, getProId, editePro } from '../store/project'
const FormItem = Form.Item;

const iconArr = [
  {
    class: 'icon-react',
    text: '&#xe64c;'
  },
  {
    class: 'icon-vuejs',
    text: '&#xe641;'
  },
  {
    class: 'icon-nginx',
    text: '&#xe63c;'
  },
  {
    class: 'icon-angular',
    text: '&#xe616;'
  },
  {
    class: 'icon-434-npm',
    text: '&#xe6d9;'
  },
  {
    class: 'icon-bushu',
    text: '&#xe77f;'
  },
  {
    class: 'icon-iconfontyouxihudong',
    text: '&#xe639;'
  },
  {
    class: 'icon-code1',
    text: '&#xe69f;'
  },
  {
    class: 'icon-nodejs',
    text: '&#xe989;'
  }
]

class TagForm extends React.Component {
  constructor(props) {
    super(props)
    this.icon = 'icon-code1'
    this.state = {
      index: 7,
      title: '',
      descript: '',
      view: '',
      github: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {id} = this.props.match.params
        let prams = {...values}
        prams.icon = this.icon
        if (id) {
          editePro(id, {...prams}).then(res => {
            if (res.code === 1) {
              message.success(res.message)
              this.props.history.push('/project')
            }
          })
        } else {
          addPro({...prams}).then(res => {
            if (res.code === 1) {
              message.success(res.message)
              this.props.history.push('/project')
            }
          })
        }
      }
    });
  }
  selectIcon(text, index) {
    this.icon = text
    this.setState({
      index
    })
  }
  componentWillMount () {
    const {id} = this.props.match.params
    if (id) {
      getProId(id).then(res=> {
        const {title, descript, view, github, icon} = res.result
        let index = 7
        this.icon = icon
        iconArr.map((item, i) => {
          if(item.text == icon) {
            index = i
          }
        })
        this.setState({title, descript, view, github, index})
      })
    }
  }
  render() {
    const { getFieldDecorator, setFieldsValue } = this.props.form;
    const {title, descript, view, github} = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('title', {
            initialValue: title,
            rules: [{ required: true, message: '请输入你的项目名称' }],
          })(
            <Input placeholder="请输入你的项目名称" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('descript', {
            initialValue: descript,
            rules: [{message: '请输入项目描述' }],
          })(
            <Input placeholder="请输入项目描述" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('view', {
            initialValue: view,
            rules: [{message: '请输入项目预览地址' }],
          })(
            <Input placeholder="请输入项目预览地址" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('github', {
            initialValue: github,
            rules: [{message: '请输入项目github地址' }],
          })(
            <Input placeholder="请输入项目github地址" />
          )}
        </FormItem>
        <FormItem>
          {
            iconArr.map((item, index) => (
              <Button 
                style={{marginRight: "10px"}} 
                onClick= {this.selectIcon.bind(this, item.class, index)}
                type={index == this.state.index ? 'primary' : ''}
                key={index}>
                <span className={`iconfont ${item.class}`}></span>
              </Button>
            ))
          }
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedTagForm = Form.create()(TagForm)

class AddTag extends React.Component {
  render () {
    return (
      <Layout history={this.props.history}>
        <SubTitle title="新增项目" />
        <WrappedTagForm match={this.props.match} history={this.props.history} />
      </Layout>
    )
  }
}

export default connect()(AddTag)
