import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <span className="nav-text">Home</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <span className="nav-text">Experience</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <span className="nav-text">Projects</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default Navbar;