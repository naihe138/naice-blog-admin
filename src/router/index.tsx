import React from 'react'
import { Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Layout = loadable(() => import('../common/layout'))
const Login = loadable(() => import('../pages/login'))
const Home = loadable(() => import('../pages/home'))

export interface routeType {
  path: string,
  component: React.SFC
}

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  }
]

export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props } {...route} /> }
    />
  );
}
