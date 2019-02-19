## 简述
这是博客内容管理系统，利用react + redux + react-router + ant design编写而成。具体模块有

1. 登录、退出
2. 文章管理
   - 文章修改，删除
   - 添加文章
   - 草稿箱
3. 标签管理
   - 新增、修改、删除标签
4. 留言墙管理
   - 新增、修改、删除留言
5. 文章评论管理
   - 新增、修改、删除留言
6. 项目管理
   - 新增、修改、删除留言
7. 音乐管理
   - 新增、修改、删除音乐
   - 上传音乐文件、海报到七牛云

## 相关链接

博客地址：[naice-blog](https://github.com/naihe138/naice-blog)

博客管理：[naice-blog-admin](https://github.com/naihe138/naice-blog-admin)

博客后台：[node-koa](https://github.com/naihe138/naice-blog-koa)


### 后台相关截图：


![登录](https://user-gold-cdn.xitu.io/2018/4/1/1627fa3f064f0ee8?w=1440&h=877&f=png&s=329202)
![](https://user-gold-cdn.xitu.io/2018/4/1/1627fa43c165b475?w=1440&h=877&f=png&s=208579)

![](https://user-gold-cdn.xitu.io/2018/4/1/1627fa5294b9a912?w=1440&h=877&f=png&s=120206)
![](https://user-gold-cdn.xitu.io/2018/4/1/1627fa4ae6d40b0e?w=1440&h=877&f=png&s=156066)
![](https://user-gold-cdn.xitu.io/2018/4/1/1627fa4d5d8e492e?w=1440&h=877&f=png&s=119976)
![](https://user-gold-cdn.xitu.io/2018/4/1/1627fa4fa0e57b2a?w=1440&h=877&f=png&s=113900)

![音乐列表](http://img.store.naice.me/tosgctnr.png)

![](https://user-gold-cdn.xitu.io/2018/4/1/1627fa591ac6e1d8?w=1440&h=877&f=png&s=108352)

![](https://user-gold-cdn.xitu.io/2018/4/1/1627fa6d0b7668d4?w=1440&h=877&f=png&s=231570)
![](https://user-gold-cdn.xitu.io/2018/4/1/1627fa676b537062?w=1440&h=877&f=png&s=118632)

### 相关技术栈：

+ react + redux + react-router + ant design
+ token控制

### server

+ node + koa + mongoose
+ 路由用了装饰器包装，鉴别参数是否正确
+ 登录权限jwt
+ 百度sro推送，邮件通知
+ pm2自动化部署
+ nginx + ssl + http2
+ 缓存
+ ....


### 未来可能加入

+ ~~网易云音乐~~
+ 移动适配
+ 页面数据可视化统计
+ react-native
+ ....


### 启动


#### clone
````
git clone git@github.com:naihe138/naice-blog-admin.git

````

#### install
````
yarn

````

#### dev

````

npm run dev

````

#### build

````
npm run build
````


如在浏览中遇到任何的bug，请留言我，我会第一时间修复，就此先谢谢
