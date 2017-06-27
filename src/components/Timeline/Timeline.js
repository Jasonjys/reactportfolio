import React, { Component } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import './Timeline.css'

class TImeline extends Component {
    render () {
        const timeLineStyle = {
            position: 'relative',
            fontSize: '140%',
            fontWeight: 400,
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
                        contentStyle={{backgroundColor: "rgb(49, 191, 185)", color: "#fff", fontSize: '90%', fontWeight: 100}}
                        container="card"
                    >
                        <li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
                        <li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
                        <li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
                        <li>I received the payment for $543. Should be shipping the item within a couple of hours.</li>
                    </TimelineEvent>
                    <TimelineEvent
                        title="Software Developer at Qlik"
                        createdAt="2017-05 - now"
                        contentStyle={{backgroundColor: "rgb(49, 191, 185)", color: "#fff", fontSize: '90%', fontWeight: 100}}
                        container="card"
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