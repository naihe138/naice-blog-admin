import React from 'react'
import { Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Login = loadable(() => import('../pages/login'))
const Home = loadable(() => import('../pages/home'))

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  // {
  //   path: '/tacos',
  //   component: Tacos,
  //   children: [
  //     {
  //       path: '/tacos/bus',
  //       component: Bus
  //     },
  //     {
  //       path: '/tacos/cart',
  //       component: Cart
  //     }
  //   ]
  // }
]

// function Tacos(route: routerItem) {
//   return (
//     <div>
//       <h2>Tacos</h2>
//       <ul>
//         <li>
//           <Link to="/tacos/bus">Bus</Link>
//         </li>
//         <li>
//           <Link to="/tacos/cart">Cart</Link>
//         </li>
//       </ul>
//       {
//         route.children ?
//         <Switch>
//           {route.children.map((route:routerItem, i:number) => (
//             <RouteWithSubRoutes key={i} {...route} />
//           ))}
//         </Switch> : null
//       }
//     </div>
//   );
// }

export function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props } {...route} /> }
    />
  );
}
