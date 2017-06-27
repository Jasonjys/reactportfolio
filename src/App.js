import React, { Component } from 'react';
import { Layout } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Coverpage from './components/Coverpage/Coverpage';
import Gallerygrid from './components/Gallerygrid/Gallerygrid';
import Timeline from './components/Timeline/Timeline';
import './App.css';
const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Layout style={{ height:'100%' }}>
                    <Header style={{ width: '100%' }}>
                        <Navbar />
                    </Header>
                    <Content style={{ height:'100%' }}>
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
