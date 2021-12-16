## React基础
- 函数组件，类组件
- React元素绑定事件
- state,setState
- 处理事件this指向问题
- 受控组件，非受控组件

## 组件
一等公民，组合成完整页面，具有可复用，独立，可组合的特性。两种创建方式：  

函数组件：
- 函数名大写开头
- 函数组件必须有返回值，是组件的结构(JSX)
- 渲染直接把函数名作为标签名
- 可以用箭头函数
```JS
function Hello() {
    return (<h1>Hello React</h1>)
}
//const Hello = () => <h1>Hello React</h1>
ReactDOM.render(<Hello />, document.getElementById('root'))
``` 

类组件：
- 名称必须大写字母开头
- 必须继承React.Component
- 必须有render方法
- render内必须有返回值
```JS
class Hello extends React.Component {
    render() {
        return (
            <h1>Hello React</h1>
        )
    }
}
ReactDOM.render(<Hello />, document.getElementById('root'))
```

## 抽离单独JS文件
- 创建一个JS文件
- 导入React
- 创建组件
- 导出组件
- 在合适位置导入组件
- 渲染组件

## React事件处理
绑定事件：
- 语法：on+事件名称 = {事件处理程序}
- 事件采用驼峰命名
- 类组件要this.事件，函数组件不用this
- 类组件声明事件：handleClick() {}
- 函数组件声明事件：function handleClick() {}

## 事件对象
通过事件处理程序的参数获取到事件对象

## 有状态/无状态组件 demo01
- 状态就是数据，类组件有状态，负责更新ui。函数组件无状态只能展示ui。
- 状态是可变的，使用setState修改
- 不要直接修改，会报错
- setState的两个作用：修改state,更新ui

## 抽离事件处理程序 demo01
将逻辑抽离到单独的方法中，会产生一个this指向问题。有三种解决方法：
- onClick={() => this.handleClick()} 注意事件加()
- 写事件的时候写成箭头函数
- 在constructor中使用bind方法

问题：constructor是什么，为什么要super，以及为什么要使用state且保证其不可变？
调用setState不会立刻修改state而是把要修改的状态放入一个队列中。而且React可能会合并几次修改。不能依赖当前的state计算下一个state。修改的时候react只需要与旧的值进行对比就知道要不要修改，这是提高性能的一种方式。ES6的继承机制是先创造父类的实例对象this,所以必须调用super,其实就是调用父类的构造方法。在contructor中可以声明对象的属性。
## 表单处理 demo02
受控组件，html中的表单元素是可输入的，也就是有自己的状态。将表单元素的value绑定到state。状态完全由React控制，就是受控组件。
- 在state中添加一个状态，并作为表单元素的value值
- 给表单元素绑定change事件，将表单元素的值设置为state的值  

问题：受控组件的好处？
我们可以控制输入，动态设置初始值，提交的时候进行验证，强制输入格式等等。  
注意：ES6属性名表达式
受控组件优化：
- 给表单元素添加name属性值，名称与state相同，用到了ES6的属性名表达式
- 根据表单元素类型获取对应值，value或者checked

非受控组件是借助于ref,使用原生的DOM方式来获取表单元素值，ref的作用是获取DOM或者组件。
- 先在constructor中用React.createRef()方法创建一个ref对象。
- 将创建好的对象添加到DOM中
- 获取值this.对象.current.value



