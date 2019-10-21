import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { RouteWithSubRoutes } from '../../router/index'
export default function Layout(props: any) {
  return (
    <div className="main">
      {
        <Switch>
          {
            props.children.map((route: any, i:number) => <RouteWithSubRoutes key={i} {...route} />)
          }
        </Switch>
      }
    </div>
  )
}
