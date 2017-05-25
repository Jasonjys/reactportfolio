import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './Imageitem.css'

class Imageitem extends Component {
	state = {
		hover: false,
		visible: false
	};

	toggleHover = () => {
		console.log("hover");
		const currentState = this.state.hover;
		this.setState({hover: !currentState});
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
			styleForImage = {opacity: '0.3'};
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
				>
					<img 
						src={this.props.img}
						style={styleForImage}
						className="image"
						onMouseEnter={this.handleEnter}
						onMouseLeave={this.handleLeave}
					/>
					<div className="middle" style={styleForText}>
						<div className="hover-text">Project</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Imageitem;