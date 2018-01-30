import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import './Imageitem.css';

const customContentStyle = {
    width: '65%',
    maxWidth: 'none',
};

class Imageitem extends Component {
    state = {
        visible: false,
        hover: false,
        title: 'title'
    };

    render () {
        let styleForImage, styleForTitle;
        const {title} = this.props || this.state;
        if (this.state.hover) {
            styleForImage = {opacity: '0.3', cursor: 'pointer'};
            styleForTitle = {opacity: '1'};

        } else {
            styleForImage = {opacity: '1'}
            styleForTitle = {opacity: '0'};
        }

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={() => this.setState({visible: false})}
            />,
        ];

        return (
            <div 
                className="item-container"
                onClick={() => this.setState({visible: true})}
                onMouseEnter={() => this.setState({hover: true})}
                onMouseLeave={() => this.setState({hover: false})}
            >
                <div className='img-containner'>
                    <img
                        alt="project-img"
                        src={this.props.img}
                        style={styleForImage}
                        className="image"
                    />
                </div>
                <div className="middle" style={styleForTitle}>
                    <div className="hover-text">{title}</div>
                </div>
                <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.visible}
                    onRequestClose={() => this.setState({visible: false})}
                >
                    <p>{this.props.summary}</p>
                    <li>- sentence1</li>
                    <li>- sentence2</li>
                    <li>- sentence3</li>
                    <li>- sentence4</li>
                    <li>- sentence5</li>
                    <li>- sentence6</li>
                </Dialog>
            </div>
        );
    }
}

export default Imageitem;