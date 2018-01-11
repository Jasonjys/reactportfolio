import React, { Component } from 'react';
import { Card } from 'antd';
import './Expgrid.css';
const { Meta } = Card;

class Expgrid extends Component {
    render () {
        return (
            <div className='grid-container'>
                <h1 style={{color: 'white', fontSize: '40px'}}>Experience</h1>

                <div className='card-container'>
                    <Card
                        style={{ width: '25%', backgroundColor: 'black', borderColor: 'black' }}
                        cover={<img alt="example" src="http://www.ciena.com/includes/prx-logo-mobile.svg" />}
                    >
                        <Meta
                            title="Europe Street beat"
                            description={<div>haha</div>}
                        />
                    </Card>
                    <Card
                        style={{ width: '25%', backgroundColor: 'black', borderColor: 'black' }}
                        cover={<img alt="example" src="https://www.qlik.com/us/-/media/images/qlik/global/qlik-logo-2x.png?h=104&w=336&la=en&hash=39A8170194871041E4D0613C94693254962A941F" />}
                    >
                        <Meta
                            title="Europe Street beat"
                            description={<div>haha</div>}
                        />
                    </Card>
                </div>

            </div>
        );
    }
}

export default Expgrid;