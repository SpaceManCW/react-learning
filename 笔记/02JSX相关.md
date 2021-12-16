## 引入两个包react和react-dom
react 是核心，负责创建元素，组件等功能；react-dom 负责渲染，提供DOM相关功能

## 两个方法
- React.createElement()用于创建react元素。第一个参数：元素名；第二个参数：对象，是元素的属性；第三个参数：元素中的具体内容
- ReactDOM.render()负责渲染react元素到页面上，第一个参数：元素；第二个参数：元素渲染的位置

## JSX基本使用
creatElement()很繁琐，不好写，不简洁。JSX就是在JS中写html,语法更直观，好学。更能体现声明式的特点  
创建一个元素：
```JS
const title = <h1>Hello,React</h1>
```
JSX不是标准的JS语法，必须使用babel转换为js，react脚手架自带babel  
注意点：
- 属性名是驼峰式的
- 特殊的属性名如class-className
- 元素没有子节点就单标签直接结束
- 推荐使用小括号包裹jsx避免一些错误，避免自动插入分号  

在JSX中使用JS表达式：使用单括号
```JS
const title = <h1>Hello,React {name}</h1>
```
## 条件渲染，列表渲染
JSX条件渲染三种方案：
- 使用if-else
- 三元表达式
- 逻辑与运算符

JSX列表渲染，使用数组的map方法,注意加key：
```JS
const song = [
    {id: 1, name: '无邪'}，
    {id: 2, name: '张起灵'}
]
//注意给每个元素加一个唯一的key,遍历谁就给谁加
const list = (
    <ul>
        {song.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
)
```

## JSX样式处理
- 行内style={{键值对}}   不推荐
- 使用类名 className

