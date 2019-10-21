import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { routes, RouteWithSubRoutes } from '../../router/index'
export function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}
