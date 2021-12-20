// useReducer

import { useReducer } from "react"
const Demo09 = () => {
    //第四步调用相应的reducer方法返回新的state
    const reducer = (state, action) => {
        if(action.type === 'add'){
            console.log('state:',state);
            return {
                count: state.count + 1
            }
        }else{
            return state
        }
    }
    //第三步调用dispatch发起action
    const addCount = () => {
        dispatch({
            type: 'add'
        })
    }
    //第一步：通过useReducer将初始的state传给定义好的reducer方法，并得到现在的state和dispatch
    const [state,dispatch] = useReducer(reducer, {count: 0})
    
    return (
        <div>
            <p>{state.count}</p>
            {/* 第二步：页面组件触发事件 */}
            <button onClick={addCount}>count++</button>
        </div>
    )
}

export default Demo09