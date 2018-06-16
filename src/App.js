import React, { Component } from 'react'
import Layout from 'antd/lib/layout'
import Spin from 'antd/lib/spin'
import Icon from 'antd/lib/icon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/Navbar/Navbar'
import Coverpage from './components/Coverpage/Coverpage'
import CoverImg from './components/Coverpage/coverImg-min.jpg'
import Expgrid from './components/Expgrid/Expgrid'
import Gallerygrid from './components/Gallerygrid/Gallerygrid'
import Footer from './components/Footer/Footer'
import exps from './components/Data/WorkExp'
import projects from './components/Data/Projects'
import './App.css'
import 'antd/dist/antd.css'
const { Content } = Layout

class App extends Component {
  constructor (props) {
    super(props)
    document.title = 'Jason Jiang'
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    setTimeout(() => this.setState({ loading: false }), 1000)
  }

  render () {
    const {loading} = this.state
    const antIcon = <Icon spin type='loading' style={{ fontSize: 120 }} />
    if (loading) {
      return (
        <div className='spin-container'>
          <Spin indicator={antIcon} />
        </div>
      )
    }
    return (
      <MuiThemeProvider>
        <Layout style={{ height: '100%' }}>
          <Navbar />
          <Content style={{ height: '100%', width: '100%' }}>
            <Coverpage img={CoverImg} />
            <Expgrid exps={exps} />
            <Gallerygrid items={projects} />
            <Footer />
          </Content>
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default App
