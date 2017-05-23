import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './Imageitem.css'

class Imageitem extends Component {
	state = {
		hover: false
	}

	toggleHover = () => {
		this.setState({hover: !this.state.hover})
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
				<div className="item-container">
					<img 
						src={this.props.pic}
						style={styleForImage}
						className="image"
						onMouseEnter={this.toggleHover}
						onMouseLeave={this.toggleHover}
					/>
					<div className="middle" style={styleForText}>
						<div className="text">Project</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Imageitem;