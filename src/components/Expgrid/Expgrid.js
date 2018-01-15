import React, { Component } from 'react';
import { Card } from 'antd';
import './Expgrid.css';
const { Meta } = Card;

class Expgrid extends Component {
    render () {
        return (
            <div id='experience' className='grid-container'>
                <h1 className='exp-title'>Experience</h1>
                <div className='card-container'>
                    <Card
                        className='card'
                        cover={<img alt="example" src="http://www.ciena.com/includes/prx-logo-mobile.svg" />}
                    >
                        <Meta
                            title="Front-End Developer Co-op"
                            description="Sep 2016 to Apr 2017"
                        />
                    </Card>
                    <Card
                        className='card'
                        cover={<img alt="example" src="https://www.qlik.com/us/-/media/images/qlik/global/qlik-logo-2x.png?h=104&w=336&la=en&hash=39A8170194871041E4D0613C94693254962A941F" />}
                    >
                        <Meta
                            title="Front-End Developer Co-op"
                            description="May 2017 to Aug 2017"
                        />
                    </Card>
                </div>

            </div>
        );
    }
}

export default Expgrid;