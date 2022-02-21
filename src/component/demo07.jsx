import React from "react";
import {BrowserRouter as Router, Route, Link,Routes} from 'react-router-dom'
class Demo07 extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <h1>Reract 路由基础</h1>
                    {/* 入口 */}
                    <Link to='/first'>页面一</Link>
                    <Routes>
                        <Route path='/first' element={ <First/> }/>
                    </Routes>                   
                </div>
            </Router>
        )
    }
}

const First = (props) => {
    return(
        <p>First</p>
    )
}

export default Demo07