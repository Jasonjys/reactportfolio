import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './Navbar.css'
const { Sider} = Layout;

class Navbar extends Component {
    render () {
        return (
            <Sider
                breakpoint="xxl"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                width={120}
            >
                <div className="logo" />
                <Menu 
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => { window.location = `/reactportfolio/#${e.key}`;}}
                >
                    <Menu.Item key="home">
                        <span className="nav-text">Home</span>
                    </Menu.Item>
                    <Menu.Item key="experience">
                        <span className="nav-text">Experience</span>
                    </Menu.Item>
                    <Menu.Item key="projects">
                        <span className="nav-text">Projects</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default Navbar;