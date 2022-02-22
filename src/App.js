import React from 'react'
import  './style/test.css'
import 'antd/dist/antd.css'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import './App.css'
import routes from './router/config'
import RouterView  from './router/index'
const { SubMenu } = Menu;
const App = () => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item icon={<MailOutlined />} key = 'd1'>
                    <Link to = "/demo01">类组件的使用</Link>
                </Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />} key = 'd2'>
                    <Link to = "/demo02">获取组件的值</Link>
                </Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />} key = 'd3'>
                    <Link to = "/demo03">评论</Link>
                </Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />} key = 'd4'>
                    <Link to = "/demo04">Context的使用方法</Link>
                </Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />} key = 'd5'>
                    <Link to = "/demo05">父对子传参</Link>
                </Menu.Item>
                <Menu.Item icon={<AppstoreOutlined />} key = 'd6'>
                    <Link to = "/demo06">子对父传参</Link>
                </Menu.Item>
                <SubMenu title="React Hooks" icon={<AppstoreOutlined />} key="SubMenu">
                    <Menu.Item key = 'd8'>
                        <Link to = "/demo08">useState&&useContext</Link>
                    </Menu.Item>
                    <Menu.Item key = 'd9'>
                        <Link to = "/demo09">useReducer</Link>
                    </Menu.Item>
                    <Menu.Item key = 'd10'>
                        <Link to = "/demo10">useEffect</Link>
                    </Menu.Item>                        
                </SubMenu>
            </Menu> 
            <div className='switch'>
                <RouterView route={routes}/> 
            </div>
        </div>   
    )
}

export default App