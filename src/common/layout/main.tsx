import React from 'react'
import { Switch } from 'react-router-dom'
import { RouteWithSubRoutes } from '../../router/index'


export default function Layout(props: any) {
  console.log(11, props)
  const P = {
    computedMatch: props.computedMatch,
    history: props.history,
    location: props.location,
    match: props.match,
    path: props.path,
    staticContext: props.staticContext
  }
  return (
    <div className="main">
      {
        props.children ? 
        <Switch>
          {
            props.children.map((route: any, i:number) => <RouteWithSubRoutes key={i} {...route} {...P} />)
          }
        </Switch> : null
      }
    </div>
  )
}
