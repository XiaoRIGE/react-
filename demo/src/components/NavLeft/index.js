import React, { Component } from 'react'

import menu from '../../config/menuConfig'
import {NavLink} from 'react-router-dom'
import { Menu } from 'antd';
import './index.css'

function handleClick(e) {
    console.log('click', e);
}
const { SubMenu } = Menu;
class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount(){
        const menuNode =  this.renderMenu(menu)
        this.setState({
            menuNode
        })
    }
    //菜单渲染方法
    renderMenu=(data)=>{
        return data.map((v,i)=>{
            //有子节点 递归操作
            if(v.children){
                return (
                    <SubMenu title={v.title} key={v.key}>
                        {this.renderMenu(v.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={v.title} key={v.key}>
                    <NavLink to={v.key}>
                        {v.title}
                    </NavLink>
                </Menu.Item>
            )
            
        })
    }
    render() {
        return (
            <div >
                <div className="logo">
                   <img src="/logo192.png" />
                   <h2>xx管理系统</h2>
                </div>
                <Menu  onClick={handleClick}  mode="vertical" theme="dark">
                    {this.state.menuNode}
                </Menu>

            </div>
        );
    }
}

export default NavLeft;