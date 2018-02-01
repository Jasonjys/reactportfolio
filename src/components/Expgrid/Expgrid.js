import React, { Component } from 'react'
import Card from 'antd/lib/card'
import './Expgrid.css'
const { Meta } = Card

class Expgrid extends Component {
  render () {
    return (
      <div id='experience' className='grid-container'>
        <h1 className='exp-title'>Experience</h1>
        <div className='card-container'>
          {this.props.exps.map((exp, id) => {
            return (
              <Card
                key={id}
                className='card'
                cover={
                  <img
                    alt='example'
                    src={exp.imgUrl}
                  />
                }
              >
                <Meta
                  title={exp.title}
                  description={exp.description}
                />
              </Card>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Expgrid
