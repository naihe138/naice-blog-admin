import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { routes, RouteWithSubRoutes } from '../../router/index'
export function Layout() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </Router>
  )
}
