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
        width: '45%',
        maxWidth: 'none',
};

class Gallerygrid extends Component {
    state = {
        images: [
            {
                id: 1,
                image: image1,
                visible: false,
            },
            {
                id: 2,
                image: image1,
                visible: false,
            },
            {
                id: 3,
                image: image1,
                visible: false,
            },
            {
                id: 4,
                image: image1,
                visible: false,
            },
            {
                id: 5,
                image: image1,
                visible: false,
            },
            {
                id: 6,
                image: image1,
                visible: false,
            },
        ]
    };

    handleClick = (id) => {
        const newImages = this.state.images.map((item) => {
            if(item.id === id) {
                return Object.assign({}, item, {
                    visible: !item.visable
                });
            } else {
                return item;
            }
        });
        this.setState({
            images: newImages
        });
    };

    handleClose = () => {
        const newImages = this.state.images.map((item) => {
            if(item.visible ) {
                return Object.assign({}, item, {
                    visible: false
                });
            } else {
                return item;
            }
        });
        this.setState({
            images: newImages
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
        const items = this.state.images.map((item) =>(
                <Imageitem 
                    img={item.image}
                    key={item.id}
                    onClick={() => this.handleClick(item.id)}
                />
        ))
        return (
            <div className="gallery-container">
                <div className="row">
                    <div className="gallery-title">Project Gallery</div>
                </div>
                <div className="row">
                    {items}
                </div>

                <Dialog
                    title="Dialog1"
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.images[0].visible}
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

                <Dialog
                    title="Dialog2"
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.images[1].visible}
                    onRequestClose={this.handleClose}
                >
                    <li>- sentence1</li>
                    <li>- sentence2</li>
                    <li>- sentence3</li>
                    <li>- sentence4</li>
                    <li>- sentence5</li>
                    <li>- sentence6</li>
                </Dialog>

                <Dialog
                    title="Dialog3"
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.images[2].visible}
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

                <Dialog
                    title="Dialog4"
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.images[3].visible}
                    onRequestClose={this.handleClose}
                >
                    <li>- sentence1</li>
                    <li>- sentence2</li>
                    <li>- sentence3</li>
                    <li>- sentence4</li>
                    <li>- sentence5</li>
                    <li>- sentence6</li>
                </Dialog>
            </div>
        );
    };
}

export default Gallerygrid;