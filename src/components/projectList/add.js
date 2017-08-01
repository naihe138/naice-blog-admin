/**
 * @file
 * @author 何文林
 * @date 2017/7/24
 */
import React, {Component} from 'react'
import {Input, Upload, Icon, Modal, Button, message} from 'antd';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import { getProjectById, editProjectById, addProject } from '../../action/project'
import './project.css'
class AddProject extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
    uploadfinishUrl: '',
    title: '',
    describe: '',
    href: ''
  };
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    if (fileList[0] && fileList[0].response && fileList[0].response.imgUrl) {
      this.state.uploadfinishUrl = fileList[0].response.imgUrl
    }
    this.setState({ fileList })
  }
  _handleIputChange (str, e) {
    console.log(str)
    this.setState({
      [str]: e.target.value
    })
  }
  _subBtn() {
    const _this = this;
    if (_this.state.title && _this.state.describe && _this.state.href && _this.state.uploadfinishUrl) {
      if (/pedit/.test(_this.props.match.url)){
        const prams = {
          id: _this.props.match.params.id,
          title: _this.state.title,
          describe: _this.state.describe,
          hrefStr: _this.state.href,
          imageUrl: _this.state.uploadfinishUrl
        }
        store.dispatch(editProjectById(prams, (data)=> {
          _this.props.history.push('/home/project')
        }))
      } else {
        const prams = {
          title: _this.state.title,
          describe: _this.state.describe,
          hrefStr: _this.state.href,
          imageUrl: _this.state.uploadfinishUrl
        }
        store.dispatch(addProject(prams, (data)=> {
          _this.props.history.push('/home/project')
        }))
      }
    } else {
      message.info('所有选线不能为空');
    }
  }
  _setEdit(obj) {
    let arr = [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: obj.imageUrl,
    }]
    this.setState({
      title: obj.title,
      describe: obj.describe,
      href: obj.hrefStr,
      fileList: arr,
      uploadfinishUrl: obj.imageUrl,
    })
  }
  componentDidMount() {
    const self = this;
    if (/pedit/.test(this.props.match.url)) {
      const id = this.props.match.params.id
      if (!this.props.project.list) {
        self.setState({
          loading: true
        });
        store.dispatch(getProjectById({id}, (data)=> {
          self.setState({
            loading: false
          });
          self._setEdit(data.data)
        }))
      } else {
        const data = this.props.project.list.filter(item => item._id === id)
        self._setEdit(data[0])
      }
    }
  }

  render () {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <section id="project">
        <p>项目标题：</p>
        <Input value={this.state.title}
               onInput={this._handleIputChange.bind(this, 'title')}
               placeholder="项目标题" />
        <p>项目描述：</p>
        <Input value={this.state.describe}
               onInput={this._handleIputChange.bind(this, 'describe')}
               placeholder="项目描述" />
        <p>项目连接：</p>
        <Input value={this.state.href}
               onInput={this._handleIputChange.bind(this, 'href')}
               placeholder="项目连接" />
        <p>上传图片：</p>
        <div className="clearfix">
          <Upload
            action="http://localhost:3030/api/backstage/upload"
            listType="picture-card"
            fileList={fileList}
            name="file"
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
        <Button onClick={this._subBtn.bind(this)} className="subBtn" type="primary" size="large">提交</Button>
      </section>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    project: store.project
  };
};

export default connect(mapStateToProps)(AddProject)
