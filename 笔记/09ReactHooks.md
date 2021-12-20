## 为什么会有react hooks
组件最好不要是复杂的容器，最好只是数据流的通道。开发者根据需要组合通道。也就是说组件的最佳写法是函数组件而不是类组件。但是纯函数有很多缺点：
- 纯函数没有状态
- 纯函数没有生命周期
- 纯函数没有this
- 只能是纯函数

这些缺点使函数组件只能做ui的展示，不能进行状态管理与切换。但是类组件太繁琐，每创建一个类组件都继承React实例

## 什么是ReactHooks
ReactHooks就是加强版的函数组件。意思就是组件尽量写成纯函数，需要外部功能和副作用就用钩子把外部代码钩进来。常用钩子：
- useState()
- useContext()
- useReducer()
- useEffect()
- useRef()
- useCallback()
- useMemo()

## setState() demo08
函数组件没有状态，useState()用于为函数组件引入状态。使用步骤：
- const [count, setCount] = useState(0)
- count代表变量名，setCount代表修改count的方法，useState(0)中的0代表count的初始

## useContext() 共享状态钩子 demo08
- 父组件声明上下文全局变量const AppContext = React.creatContext()
- 从这个变量中解构出 Previder:  const {Provider} = AppContext
- 想要共享状态的子组件必须包裹在Previder标签里
- 父组件通过Previder的value属性设置要传递的数据:<Provider value={{name: 'hooks测试'}}></Provider>,注意是双大括号
- 子组件就可以解构出数据：const {name} = useContext(AppContext)

## useReducer() Action钩子 demo09
React状态管理一般使用redux,react本身是不提供状态管理的。redux是用户页面发起action，通过reducer方法改变state，从而实现页面和状态通信。reducer的形式是
(state, action) => newstate。类似的useReducer()是这样的const [state, dispatch] = useReducer(reducer, initialState)，他接受reducer的函数和状态的初始值作为参数，返回一个数组，第一项为当前的状态，第二项为发送action的dispatch函数
- 定义好reducer函数，参数是state和action
- 使用useReducer 建立state和reducer方法的关系并得到dispatch和state
- 用户页面触发事件，调用dispatch方法发送action
- 调用相应的reducer方法返回新的state

## useEffect() 副作用钩子 demo10
useEffect()为函数提供处理副作用的钩子，类组件我们可以把请求放在componentDidMount里面，函数组件就使用useEffect()。useEffect()接受两个参数，第一个参数是要进行的异步操作，第二个参数是一个数组，用来给出Effect的依赖项。只要数组变化，useEffect就会执行。第二个参数不填useEffect会在每次组件渲染时执行。类似于类组件的componentDidMount()。

## useRef() 

