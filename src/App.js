import React, { Component } from 'react';
import { Layout } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Coverpage from './components/Coverpage/Coverpage';
import Gallerygrid from './components/Gallerygrid/Gallerygrid';
import CoverImg from './components/Coverpage/coverImg.jpg';
import './App.css';
const { Content, Footer } = Layout;

import Expgrid from './components/Expgrid/Expgrid';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Layout style={{ height:'100%' }}>
                    <Navbar />
                    <Content style={{ height:'100%', width: '100%' }}>
                        <Coverpage img={ CoverImg } />
                        <Expgrid />
                        <Gallerygrid />
                        <Footer style={{ textAlign: 'center' }}>
                            Footer
                        </Footer>
                    </Content>
                </Layout>
            </MuiThemeProvider>
        );
    }
}

export default App;
