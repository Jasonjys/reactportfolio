import React, { Component } from 'react';
import Imageitem from '../Imageitem/Imageitem'
import Pic from '../../../public/img/portfolio/thumbnails/1.jpg'
import './Gallerygrid.css'

class Gallerygrid extends Component {
	render () {
		return (
			<div className="container-fluid">
				<div className="row">
					<Imageitem pic={Pic} />
					<Imageitem pic={Pic} />
					<Imageitem pic={Pic} />
				</div>
				<div className="row">
					<Imageitem pic={Pic} />
					<Imageitem pic={Pic} />
					<Imageitem pic={Pic} />
				</div>
			</div>
		);
	}
}

export default Gallerygrid;