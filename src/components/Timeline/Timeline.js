import React, { Component } from 'react';
import Timeline from 'react-image-timeline';
import 'react-image-timeline/dist/timeline.css';

const customFooter= () => {
    return null;
};

class TImeline extends Component {
	render () {
		const experience = [
			{
				date: new Date(),
				text: "haha",
				title: "Ciena",
				imageUrl: "https://s3.amazonaws.com/aaron-cdn/react-image-timeline/berlin.jpg"
			}
		]

		return (
			<div className="timeline-container">
				<Timeline 
					events={experience}
					customFooter={customFooter}
				/>
 			</div>
		);
	}
}

export default TImeline;