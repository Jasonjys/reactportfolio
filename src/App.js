import React, { Component } from 'react';
import { Layout, Spin, Icon } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Coverpage from './components/Coverpage/Coverpage';
import CoverImg from './components/Coverpage/coverImg.jpg';
import Expgrid from './components/Expgrid/Expgrid';
import Gallerygrid from './components/Gallerygrid/Gallerygrid';
import './App.css';
const { Content, Footer } = Layout;


class App extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1200);
    }

    render() {
        const {loading} = this.state;
        const antIcon = <Icon type="loading" style={{ fontSize: 120 }} spin />;
        if (loading) {
            return (
                <div className='spin-container'>
                    <Spin indicator={antIcon} />
                </div>
            )
        }
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
