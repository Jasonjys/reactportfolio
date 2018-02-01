import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Layout } from 'antd'
import './Footer.css'
const { Footer } = Layout

class NavFooter extends Component {
  render () {
    return (
      <Footer className='footer'>
        <a href='https://www.linkedin.com/in/yaoshen-jiang-305572b0/' target='_blank'>
          <div className='svg-container'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} size='4x' className='highlight' />
          </div>
        </a>
        <a href='https://github.com/Jasonjys' target='_blank'>
          <div className='svg-container'>
            <FontAwesomeIcon icon={['fab', 'github']} size='4x' className='highlight' />
          </div>
        </a>
        <a href='mailto:jasonjys0511@gmail.com' target='_blank'>
          <div className='svg-container'>
            <FontAwesomeIcon icon='envelope' size='4x' className='highlight' />
          </div>
        </a>
      </Footer>
    )
  }
}

export default NavFooter
