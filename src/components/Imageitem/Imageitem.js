import React, { Component } from 'react';
import './Imageitem.css'

class Imageitem extends Component {
    state = {
        hover: false,
        text: 'text'
    };

    render () {
        let styleForImage, styleForText, text;
        text = this.props.text || this.state.text;
        if (this.state.hover) {
            styleForImage = {opacity: '0.3', cursor: 'pointer'};
            styleForText = {opacity: '1'};

        } else {
            styleForImage = {opacity: '1'}
            styleForText = {opacity: '0'};
        }
        return (
            <div 
                className="item-container"
                onClick={this.props.onClick}
                onMouseEnter={() => this.setState({hover: true})}
                onMouseLeave={() => this.setState({hover: false})}
            >
                <div style={{display: 'flex'}}>
                    <img
                        alt="project-img"
                        src={this.props.img}
                        style={styleForImage}
                        className="image"
                    />
                </div>
                <div className="middle" style={styleForText}>
                    <div className="hover-text">{text}</div>
                </div>
            </div>
        );
    }
}

export default Imageitem;