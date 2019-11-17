export interface menuType {
  title: string,
  key: string,
  icon?: string,
  path?: string,
  children?: menuType[]
}

export const menuConfig:menuType[] = [
  {
    title: 'HOME',
    key: 'home',
    icon: 'home',
    path: '/'
  },
  {
    title: '文章管理',
    key: 'article',
    icon: 'edit',
    children: [
      {
        title: '文章列表',
        key: 'article-list',
        path: '/article'
      },
      {
        title: '添加文章',
        key: 'article-add',
        path: '/article-add'
      },
      {
        title: '草稿箱',
        key: 'article-draft',
        path: '/article-draft'
      },
      {
        title: '文章归类',
        key: 'article-classify',
        path: '/article-classify'
      }
    ]
  },
  {
    title: '标签管理',
    key: 'tags',
    icon: 'tags',
    children: [
      {
        title: '全部标签',
        key: 'tags-all',
        path: '/tags'
      },
      {
        title: '新增标签',
        key: 'tags-add',
        path: '/tags-add'
      }
    ]
  },
  {
    title: '留言墙管理',
    key: 'message',
    icon: 'message',
    children: [
      {
        title: '全部留言',
        key: 'message-all',
        path: '/message'
      },
      {
        title: '新增留言',
        key: 'message-add',
        path: '/message-add'
      }
    ]
  },
  {
    title: '评论管理',
    key: 'discuss',
    icon: 'code',
    children: [
      {
        title: '文章评论',
        key: 'discuss-article',
        path: '/discuss-article'
      }
    ]
  },
  {
    title: '项目管理',
    key: 'project',
    icon: 'project',
    children: [
      {
        title: '全部项目',
        key: 'project-all',
        path: '/project'
      },
      {
        title: '新增项目',
        key: 'project-add',
        path: '/project-add'
      }
    ]
  },
  {
    title: '音乐管理',
    key: 'music',
    icon: 'play-circle',
    children: [
      {
        title: '音乐列表',
        key: 'music-list',
        path: '/music'
      },
      {
        title: '新增音乐',
        key: 'music-add',
        path: '/music-add'
      }
    ]
  }
]
