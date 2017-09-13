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
const Longin = asyncComponent(() => import('./components/longin/login'));
const Home = asyncComponent(() => import('./components/home/home'));

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
