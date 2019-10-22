
export interface menuType {
  title: string,
  key: string,
  icon?: string,
  path?: string,
  children?: menuType[]
}

export const menuConfig:menuType[] = [
  {
    title: '文章管理',
    key: 'article',
    icon: 'edit',
    children: [
      {
        title: '文章列表',
        key: 'article-list',
        path: '/'
      },
      {
        title: '添加文章',
        key: 'add-article',
        path: '/'
      },
      {
        title: '草稿箱',
        key: 'draft',
        path: '/'
      },
      {
        title: '文章归类',
        key: 'classify',
        path: '/'
      }
    ]
  },
  {
    title: '标签管理',
    key: 'lebel',
    icon: 'tags',
    children: [
      {
        title: '全部标签',
        key: 'all-lable',
        path: '/'
      },
      {
        title: '新增标签',
        key: 'add-lable',
        path: '/'
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
        key: 'all-message',
        path: '/'
      },
      {
        title: '新增留言',
        key: 'add-message',
        path: '/'
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
        key: 'article-discuss',
        path: '/'
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
        key: 'all-project',
        path: '/'
      },
      {
        title: '新增项目',
        key: 'add-project',
        path: '/'
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
        path: '/'
      },
      {
        title: '新增音乐',
        key: 'add-music',
        path: '/'
      }
    ]
  }
]
