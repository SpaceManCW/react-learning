## 目标
- React路由的作用
- react-router-dom基本作用
- 编程式导航跳转路由
- React路由匹配模式

## 介绍
- 单页面应用程序的用户体验更好，服务器压力更小。为有效使用单个页面管理原来多页面的功能，前端路由应运而生   
- 功能就是从一个页面导航到另一个页面
- 路由是一套映射规则，是URL路径与组件的对应关系

## 路由基本使用
- 安装：yarn add react-router-dom
- 导入路由的四个核心组件：Router/Route/Link/Routes
- 使用Router标签包裹整个应用
- 使用Link组件作为导航菜单（路由入口）
- 使用Route组件配置路由规则和要展示的组件（路由出口）
- 注意Route必须在Routes标签内
- Router包裹整个应用

## 路由的执行过程
- 点击link标签，修改地址栏url地址
- React路由监听到地址栏URL的变化
- React路由内部遍历所有Route组件，使用路由规则path与URL中的pathname进行匹配
- 路由规则path匹配地址栏的pathname时，就展示该Route组件的内容

## 编程式导航
- 点击登陆，登陆成功自动跳转到首页
- 编程式导航就是使用JS代码来实现页面的跳转
- history是React路由提供的，用于获取浏览器历史记录的相关信息
- push(path):跳转到某个页面，参数path表示要跳转的路径
- go()前进或者后退页面，go(-1)就是后退一页
- 默认路由，将path属性设置为‘/’

## 匹配模式
- 模糊匹配：只要pathname以path开头就能匹配成功
- 精准匹配：给route标签加一个exact，只用pathname与path完全一样才会匹配成功（推荐）


