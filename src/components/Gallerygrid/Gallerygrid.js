import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Imageitem from '../Imageitem/Imageitem'
import Pic from '../../../public/img/portfolio/thumbnails/1.jpg'
import './Gallerygrid.css'

class Gallerygrid extends Component {
	state = {
		visiableArray: []
	};

	handleClick = (e) => {
		debugger
	};

	render () {
		return (
			<div className="gallery-container">
				<div className="row">
					<div className="gallery-title">Project Gallery</div>
				</div>
				<div className="row">
					<Imageitem pic={Pic} onClick={this.handleClick} />
					<Imageitem pic={Pic} onClick={this.handleClick} />
					<Imageitem pic={Pic} onClik={this.handleClick} />
				</div>
				<div className="row">
					<Imageitem pic={Pic} onClick={this.handleClick} />
					<Imageitem pic={Pic} onClick={this.handleClick} />
					<Imageitem pic={Pic} onClick={this.handleClick} />
				</div>

				<Modal
					title="Modal1"
					visible={this.state.visiableArray[0]}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>

				<Modal
					title="Modal2"
					visible={this.state.visiableArray[1]}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>

				<Modal
					title="Basic Modal"
					visible={this.state.visiableArray[2]}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</div>
		);
	};
}

export default Gallerygrid;