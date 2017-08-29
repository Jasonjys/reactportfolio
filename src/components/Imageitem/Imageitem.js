import React, { Component } from 'react';
import './Imageitem.css'

class Imageitem extends Component {
    state = {
        hover: false,
        text: 'text'
    };

    handleEnter = () => {
        this.setState({hover: true});
    };

    handleLeave = () => {
        this.setState({hover: false});
    };

    render () {
        let styleForImage, styleForText;
        if (this.state.hover) {
            styleForImage = {opacity: '0.3', cursor: 'pointer'};
            styleForText = {opacity: '1'};

        } else {
            styleForImage = {opacity: '1'}
            styleForText = {opacity: '0'};
        }
        return (
            <div className="col-lg-4 col-sm-6 no-padding">
                <div 
                    className="item-container"
                    onClick={this.props.onClick}
                    onMouseEnter={this.handleEnter}
                    onMouseLeave={this.handleLeave}
                >
                    <img
                        alt=""
                        src={this.props.img}
                        style={styleForImage}
                        className="image"
                    />
                    <div className="middle" style={styleForText}>
                        <div className="hover-text">{this.state.text}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Imageitem;