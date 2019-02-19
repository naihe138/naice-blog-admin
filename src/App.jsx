
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
import store from './store'
import './static/css/init.css'

const loadStyle = {
  width: "100%",
  height: "400px",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
const loading = () => <div style={loadStyle}><Spin tip="Loading..."></Spin></div>

const loadComponent = (name) => Loadable({
  loader: () => import(`./views/${name}`),
  loading
})

// const Reply = Loadable({
//   loader: () => import('./views/reply.js'),
//   loading
// })

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={loadComponent('articleList')}/>
        <Route path="/login" component={loadComponent('login')}/>
        <Route path="/addArticle" component={loadComponent('addArticle')}/>
        <Route path="/skitch" component={loadComponent('sketch')}/>
        <Route path="/edite/:id" component={loadComponent('editeArticle')}/>
        <Route path="/tag" component={loadComponent('tag')}/>
        <Route path="/addTag" component={loadComponent('addTag')}/>
        <Route path="/hero" component={loadComponent('hero')}/>
        <Route path="/class" component={loadComponent('classify')}/>
        <Route path="/comment" component={loadComponent('comment')}/>
        <Route path="/project" component={loadComponent('projectList')}/>
        <Route path="/addProject" component={loadComponent('addProject')}/>
        <Route path="/editeProject/:id" component={loadComponent('addProject')}/>
        <Route path="/music" component={loadComponent('music')}/>
        <Route path="/addMusic" component={loadComponent('addMusic')}/>
        <Route path="/editMusic/:id" component={loadComponent('addMusic')}/>
        <Route component={loadComponent('404')}/>
      </Switch>
    </Router>
  </Provider>
)

export default App