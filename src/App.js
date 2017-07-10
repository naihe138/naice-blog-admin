import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import store from './redux/store.js'
import asyncComponent from './AsyncComponent'
// 同步引入
import Longin from './components/longin/login'
import PostList from './components/postList/postList'
import Home from './components/home/home'
import PostDetail from './components/postDetail/postDetail'
// const AsyncHome = asyncComponent(() => import('./components/postDetail/postDetail'));
const history = createHistory()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history = {history}>
            <div className="App">
              <Route exact path="/" component={Longin}/>
              <Route path="/home" component={Home}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
