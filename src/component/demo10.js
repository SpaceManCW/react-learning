import React,{ useEffect, useState} from 'react'

const Demo10 = () => {
    const [loading, setloadig] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloadig(false)
        },3000)
    })
    // 显示三秒加载中然后显示异步请求完成
    return (loading ? <p>Loading....</p>: <p>异步请求完成</p>)
}

export default Demo10