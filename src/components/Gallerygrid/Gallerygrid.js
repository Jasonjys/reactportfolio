import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Imageitem from '../Imageitem/Imageitem'
import image1 from '../../../public/img/portfolio/fullsize/1.jpg'
import image2 from '../../../public/img/portfolio/fullsize/1.jpg'
import image3 from '../../../public/img/portfolio/fullsize/1.jpg'
import image4 from '../../../public/img/portfolio/fullsize/1.jpg'
import image5 from '../../../public/img/portfolio/fullsize/1.jpg'
import image6 from '../../../public/img/portfolio/fullsize/1.jpg'

import './Gallerygrid.css'

const customContentStyle = {
    width: '65%',
    maxWidth: 'none',
};

class Gallerygrid extends Component {
    state = {
        items: [
            {
                id: 0,
                image: image1,
                text: 'React Portfolio',
                visible: false,
            },
            {
                id: 1,
                image: image1,
                text: 'Retrieve',
                visible: false,
            },
            {
                id: 2,
                image: image1,
                text: 'Ember Tasks',
                visible: false,
            },
            {
                id: 3,
                image: image1,
                text: 'project4',
                visible: false,
            }
        ]
    };

    handleClick = (id) => {
        const newItems = this.state.items.map((item) => {
            if(item.id === id) {
                return {...item, visible: true}
            } else {
                return item;
            }
        });
        this.setState({
            items: newItems
        });
    };

    handleClose = () => {
        const newItems = this.state.items.map((item) => {
            if (item.visible) {
                return {...item, visible: false}
            } else {
                return item;
            }
        });
        this.setState({
            items: newItems
        });
    };

    render () {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={this.handleClose}
            />,
        ];

        const items = this.state.items.map((item) => (
            <Imageitem 
                img={item.image}
                text={item.text}
                key={item.id}
                onClick={() => this.handleClick(item.id)}
            />
        ))

        const dialogs = this.state.items.map((item, index) => (
            <Dialog
                title={`Dialog${index}`}
                key={item.id}
                actions={actions}
                modal={false}
                contentStyle={customContentStyle}
                open={item.visible}
                onRequestClose={this.handleClose}
            >
                <p>Description goes here</p>
                <li>- sentence1</li>
                <li>- sentence2</li>
                <li>- sentence3</li>
                <li>- sentence4</li>
                <li>- sentence5</li>
                <li>- sentence6</li>
            </Dialog>
        ))
        return (
            <div id='projects' className="gallery-container">
                <div className="gallery-title">Project Gallery</div>
                <div style={{display: 'flex', width: '100%', height: '90%', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    {items}
                </div>

                {dialogs}
            </div>
        );
    };
}

export default Gallerygrid;