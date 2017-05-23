import React, { Component } from 'react';
import img from '../../../public/img/portfolio/thumbnails/1.jpg'

class Timelineitem extends Component {
	render () {
		return (
			<div>
				<div className="timeline-image">
					<img className="img-circle img-responsive" src={img} />
				</div>
				<div className="timeline-panel">
					<div className="timeline-heading">
						<h4>2009-2011</h4>
						<h4 className="subheading">Our Humble Beginnings</h4>
					</div>
					<div className="timeline-body">
						<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Timelineitem;