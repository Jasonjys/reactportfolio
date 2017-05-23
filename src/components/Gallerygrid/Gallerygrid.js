import React from 'react';
import Imageitem from '../Imageitem/Imageitem'
import Pic from '../../../public/img/portfolio/thumbnails/1.jpg'
import './Gallerygrid.css'

const Gallerygrid = (props) => {
	return (
		<div className="gallery-container">
			<div className="row">
				<div className="gallery-title">Project Gallery</div>
			</div>
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

export default Gallerygrid;