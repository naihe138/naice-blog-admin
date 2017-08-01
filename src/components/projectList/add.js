/**
 * @file
 * @author 何文林
 * @date 2017/7/24
 */
import React, {Component} from 'react'
import {Input, Upload, Icon, Modal, Button, message} from 'antd';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import {getArticle, removeArticle} from '../../action/article'
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
    console.log(file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    if (fileList[0].response && fileList[0].response.imgUrl) {
      this.state.uploadfinishUrl = fileList[0].response.imgUrl
    }
    this.setState({ fileList })
  }
  _handleIputChange (str, e) {
    this.state[str] = e.target.value
  }
  _subBtn() {
    if (this.state.title && this.state.describe && this.state.href) {
      console.log(123)
    } else {
      message.info('所有选线不能为空');
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
        <Input onChange={this._handleIputChange.bind(this, 'title')} placeholder="项目标题" />
        <p>项目描述：</p>
        <Input onChange={this._handleIputChange.bind(this, 'describe')} placeholder="项目描述" />
        <p>项目连接：</p>
        <Input onChange={this._handleIputChange.bind(this, 'href')} placeholder="项目连接" />
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
    article: store.article
  };
};

export default connect(mapStateToProps)(AddProject)
