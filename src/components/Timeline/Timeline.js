import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
//import Timeline from 'react-image-timeline';
//import 'react-image-timeline/dist/timeline.css';
import './Timeline.css'

const nothing = () => {
	return null;
};

class TImeline extends Component {
	render () {
	// 	const experience = [
	// 		{
	// 			date: new Date(),
	// 			text: "haha",
	// 			title: "Ciena",
	// 			imageUrl: "https://s.gravatar.com/avatar/4f0089691b6f64dd659368b1bcd8a92b?size=496&default=retro"
	// 		}
	// 	]

	// 	return (
	// 		<div className="timeline-container">
	// 			<Timeline 
	// 				events={experience}
	// 				customFooter={nothing}
	// 			/>
 // 			</div>
	// 	);
	// }

		const timeLineStyle = {
			position: 'relative',
			fontSize: '110%',
			fontWeight: 300,
			padding: '10px 0px',
			width: '60%',
			margin: '0px auto',
			color: 'white',
		};
		return (
			<div className="timeline-container">
				<div className="experience-title">Experience</div>
				 <Timeline style={timeLineStyle}>
					<TimelineEvent 
						title="Software Developer at Ciena"
						createdAt="2016-09 - 2017-05"
						style={{color: "#fff"}}
						contentStyle={{backgroundColor: "rgb(52, 171, 166)", color: "#fff"}}
					>
						<li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
						<li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
						<li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
						<li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
					</TimelineEvent>
					<TimelineEvent
						title="You sent an email to John Doe"
						createdAt="2016-09-11 09:06 AM"
						contentStyle={{backgroundColor: "rgb(52, 171, 166)", color: "#fff"}}
					>
						<li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
						<li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
						<li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
						<li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
					</TimelineEvent>
				</Timeline>
			</div>
		)
	}
}

export default TImeline;