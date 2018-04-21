import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { addCount} from '../store/test'

class Home extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>
        <h1 className="App-title">home ---> {this.props.countObj.count}</h1>
        <Button type="primary" onClick={this.props.addCount}>+++1</Button>
      </div>
    );
  }
}

const mapStateToProps = ({ countObj }) => ({ countObj })

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => dispatch(addCount())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);