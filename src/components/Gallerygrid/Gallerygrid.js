import React, { Component } from 'react'
import Imageitem from '../Imageitem/Imageitem'
import './Gallerygrid.css'

class Gallerygrid extends Component {
  render () {
    const items = this.props.items.map((item, id) => (
      <Imageitem
        img={item.image}
        title={item.title}
        summary={item.summary}
        description={item.description}
        key={id}
      />
    ))
    return (
      <div id='projects' className='gallery-container'>
        <div className='gallery-title'>Project Gallery</div>
        <div className='gallery-box'>
          {items}
        </div>
      </div>
    )
  };
}

export default Gallerygrid
