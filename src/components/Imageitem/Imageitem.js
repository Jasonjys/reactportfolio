import React, { Component } from 'react';
import './Imageitem.css'

class Imageitem extends Component {
    state = {
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
                <div className="middle" style={styleForTitle}>
                    <div className="hover-text">{title}</div>
                </div>
            </div>
        );
    }
}

export default Imageitem;