// useState && useContext

import React,{ useState, useContext } from 'react'

const Demo08 = () => {
    //useState()测试
    const [count, setCount] = useState(0)
    const addCount = () => {
        let newCount = count
        setCount(newCount += 1)
    }

    //useContext()测试
    const AppContext = React.createContext()//父组件里面声明全局变量
    const { Provider } = AppContext //解构出Provider

    const A = () => {
        const {name} = useContext(AppContext)//子组件解构出来数据
        return (
            <p>父组件传递过来的数据：{name}</p>
        )
    }

    const B = () => {
        const {name} = useContext(AppContext)
        return (
            <p>父组件传递过来的数据：{name}</p>
        )
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={addCount}>+1</button>
            {/* 父组件在Provider标签的value属性中填数据，注意是双大括号 */}
            <Provider value = {{name: 'hooks'}}>
                <A/>
                <B/>
            </Provider>
        </div>

    )
}
export default Demo08