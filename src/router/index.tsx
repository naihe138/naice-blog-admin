import React from 'react'
import { Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Layout = loadable(() => import('../common/layout'))
const Login = loadable(() => import('../pages/login'))
const ArticleList = loadable(() => import('../pages/article-list'))
const AddArticle = loadable(() => import('../pages/article-add'))
const ArticleClassify = loadable(() => import('../pages/article-classify'))
const ArticleComments = loadable(() => import('../pages/article-comments'))
const ArticleDraft = loadable(() => import('../pages/article-draft'))
const AddMessage = loadable(() => import('../pages/message-add'))
const MessageList = loadable(() => import('../pages/messages-list'))
const MusicAdd = loadable(() => import('../pages/music-add'))
const MusicList = loadable(() => import('../pages/music-list'))
const ProjectAdd = loadable(() => import('../pages/project-add'))
const Projects = loadable(() => import('../pages/projects'))
const Tags = loadable(() => import('../pages/tags'))
const TagAdd = loadable(() => import('../pages/tag-add'))
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
        path: '/article',
        component: ArticleList
      },
      {
        path: '/article-add',
        component: AddArticle
      },
      {
        path: '/article-classify',
        component: ArticleClassify
      },
      {
        path: '/discuss',
        component: ArticleComments
      },
      {
        path: '/article-draft',
        component: ArticleDraft
      },
      {
        path: '/message-add',
        component: AddMessage
      },
      {
        path: '/message',
        component: MessageList
      },
      {
        path: '/music-add',
        component: MusicAdd
      },
      {
        path: '/music',
        component: MusicList
      },
      {
        path: '/project-add',
        component: ProjectAdd
      },
      {
        path: '/project',
        component: Projects
      },
      {
        path: '/tags',
        component: Tags
      },
      {
        path: '/tags-add',
        component: TagAdd
      },
      {
        path: '/',
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
  )
}
