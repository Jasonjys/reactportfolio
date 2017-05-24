import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar'
import Coverpage from './components/Coverpage/Coverpage';
import Image from './components/Imageitem/Imageitem';
import Gallerygrid from './components/Gallerygrid/Gallerygrid';
import Timelineitem from './components/Timelineitem/Timelineitem';
import Timeline from './components/Timeline/Timeline';
import pic from '../public/img/portfolio/thumbnails/1.jpg';
import './App.css';
const { Header, Content, Footer } = Layout

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Layout style={{ height:'100%' }}>
					<Header style={{ position: 'fixed', width: '100%' }}>
						<Navbar />
					</Header>
					<Content style={{marginTop: 64, height:'100%' }}>
						<Coverpage />
						<Gallerygrid />
						<Timeline />
					</Content>
				</Layout>
			</MuiThemeProvider>
		);
	}
}

export default App;
