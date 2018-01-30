import React, { Component } from 'react';
import { Layout, Spin, Icon } from 'antd';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';
import Coverpage from './components/Coverpage/Coverpage';
import CoverImg from './components/Coverpage/coverImg.jpg';
import Expgrid from './components/Expgrid/Expgrid';
import Gallerygrid from './components/Gallerygrid/Gallerygrid';
import Footer from './components/Footer/Footer';
import exps from './components/Data/WorkExp';
import projects from './components/Data/Projects';
import './App.css';
const { Content } = Layout;

class App extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1200);
    }

    render() {
        const {loading} = this.state;
        const antIcon = <Icon spin type="loading" style={{ fontSize: 120 }} />;
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
                        <Expgrid exps={exps} />
                        <Gallerygrid items={projects} />
                        <Footer />
                    </Content>
                </Layout>
            </MuiThemeProvider>
        );
    }
}

export default App;
