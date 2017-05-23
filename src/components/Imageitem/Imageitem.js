import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import './Imageitem.css'

class Imageitem extends Component {
	state = {
		hover: false,
		visible: false
	};

	toggleHover = () => {
		this.setState({hover: !this.state.hover})
	};

	handleClick = (e) => {
		this.props.onClick(e)
		// this.setState({
		// 	visible: true,
		// });
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false
		});
	};

	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
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
					onClick={this.handleClick}
				>
					<img 
						src={this.props.pic}
						style={styleForImage}
						className="image"
						onMouseEnter={this.toggleHover}
						onMouseLeave={this.toggleHover}
					/>
					<div className="middle" style={styleForText}>
						<div className="hover-text">Project</div>
					</div>
				</div>

				<Modal
					title="Basic Modal"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		);
	}
}

export default Imageitem;