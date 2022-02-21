import React,{useState} from 'react'
import  '../style/test.css'
import 'antd/dist/antd.css'
import { Menu,Button } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Hello from '../component/demo01'
import Demo02 from '../component/demo02'
import Comment from '../component/demo03';
import Demo04 from "../component/demo04";
import Demo05 from "../component/demo05";
import Demo06 from "../component/demo06";
import Demo08 from "../component/demo08";
import Demo09 from "../component/demo09";
import Demo10 from "../component/demo10";
import '../style/main.css'
const { SubMenu } = Menu;
const Main = () => {
    return (
        <div>
            <Router>
                <Menu mode="horizontal">
                    <Menu.Item icon={<MailOutlined />}>
                        <Link to = "/demo01">类组件的使用</Link>
                    </Menu.Item>
                    <Menu.Item icon={<AppstoreOutlined />}>
                        <Link to = "/demo02">获取组件的值</Link>
                    </Menu.Item>
                    <Menu.Item icon={<AppstoreOutlined />}>
                        <Link to = "/demo03">评论</Link>
                    </Menu.Item>
                    <Menu.Item icon={<AppstoreOutlined />}>
                        <Link to = "/demo04">Context的使用方法</Link>
                    </Menu.Item>
                    <Menu.Item icon={<AppstoreOutlined />}>
                        <Link to = "/demo05">父对子传参</Link>
                    </Menu.Item>
                    <Menu.Item icon={<AppstoreOutlined />}>
                        <Link to = "/demo06">子对父传参</Link>
                    </Menu.Item>
                    <SubMenu title="React Hooks"icon={<AppstoreOutlined />}>
                        <Menu.Item >
                            <Link to = "/demo08">useState&&useContext</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to = "/demo09">useReducer</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to = "/demo10">useEffect</Link>
                        </Menu.Item>                        
                    </SubMenu>
                </Menu> 
                <div className='switch'>
                    <Routes>
                        <Route path = "/demo01" element = {<Hello/>}></Route>
                        <Route path = "/demo02" element = {<Demo02/>}></Route>
                        <Route path = "/demo03" element = {<Comment/>}></Route>
                        <Route path = "/demo04" element = {<Demo04/>}></Route>
                        <Route path = "/demo05" element = {<Demo05/>}></Route>
                        <Route path = "/demo06" element = {<Demo06/>}></Route>
                        <Route path = "/demo08" element = {<Demo08/>}></Route>
                        <Route path = "/demo09" element = {<Demo09/>}></Route>
                        <Route path = "/demo10" element = {<Demo10/>}></Route>
                    </Routes>
                </div>

            </Router>

        </div>
        
    )
}

export default Main