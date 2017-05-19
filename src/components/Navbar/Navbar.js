import React, { Component } from 'react';
import { Menu } from 'antd';

class Navbar extends Component {
	render () {
		return (
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['1']}
				style={{ lineHeight: '64px' }}
			  >
				<Menu.Item key="1">Main</Menu.Item>
				<Menu.Item key="2">Projects</Menu.Item>
				<Menu.Item key="3">Experience</Menu.Item>
				</Menu>
		);
	}
}

export default Navbar;