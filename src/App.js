import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link
} from 'react-router-dom'

// 同步引入
import Longin from './components/longin/login'
import PostList from './components/postList/postList'
import PostDetail from './components/postDetail/postDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
              <li><Link to="/">Login</Link></li>
              <li><Link to="/list">PostList</Link></li>
              <li><Link to="/detail">PostDetail</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Longin}/>
            <Route path="/list" component={PostList}/>
            <Route path="/detail" component={PostDetail}/>
        </div>
      </Router>
      
    );
  }
}

export default App;
