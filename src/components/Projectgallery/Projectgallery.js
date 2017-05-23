import React, { Component } from 'react';
import { Carousel } from 'antd';

class Projectgallery extends Component {
	render () {
		return (
			<Carousel autoplay>
		    <div className="test"><h3>1</h3></div>
		    <div><h3>2</h3></div>
		    <div><h3>3</h3></div>
		    <div><h3>4</h3></div>
		  </Carousel>
		);
	}
}

export default Projectgallery;