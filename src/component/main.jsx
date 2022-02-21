import React,{useState} from 'react'
import  '../style/test.css'
const Main = () => {
    const [show,setshow] = useState(true)
    const loadDate = () => {
        return show ? (<div>元素</div>) : null
    }
    const fun = () => {
        setshow(!show)
    }
    return (
        <div className='box'>
            条件渲染:{loadDate()}
            <br />
            <button onClick={fun}>点击控制显隐</button>
        </div>
    )
}

export default Main