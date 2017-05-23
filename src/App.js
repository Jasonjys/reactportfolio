import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout
import Navbar from './components/Navbar/Navbar'
import Coverpage from './components/Coverpage/Coverpage';
import Image from './components/Imageitem/Imageitem';
import './App.css';

class App extends Component {
	render() {
		return (
			<Layout style={{ height:'100%' }}>
				<Header style={{ position: 'fixed', width: '100%' }}>
					<Navbar />
				</Header>
				<Content style={{marginTop: 64, height:'100%' }}>
					<Coverpage/>
					<Image />
				</Content>
			</Layout>
		);
	}
}

export default App;
