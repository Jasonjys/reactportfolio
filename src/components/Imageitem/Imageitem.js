import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import './Imageitem.css';

const customContentStyle = {
    width: '65%',
    maxWidth: 'none',
};

class Imageitem extends Component {
    state = {
        visible: false,
        title: 'title'
    };

    render () {
        const {title} = this.props || this.state;
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onTouchTap={() => this.setState({visible: false})}
            />,
        ];

        return (
            <div 
                className="item-container"
                onClick={() => this.setState({visible: true})}
            >
                <div className='img-containner'>
                    <img
                        className="image"
                        alt="project-img"
                        src={this.props.img}
                    />
                </div>
                <div className="middle">
                    <div className="hover-text">{title}</div>
                </div>
                <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={false}
                    contentStyle={customContentStyle}
                    open={this.state.visible}
                    onRequestClose={() => this.setState({visible: false})}
                >
                    <p>{this.props.summary}</p>
                    <li>- sentence1</li>
                    <li>- sentence2</li>
                    <li>- sentence3</li>
                    <li>- sentence4</li>
                    <li>- sentence5</li>
                    <li>- sentence6</li>
                </Dialog>
            </div>
        );
    }
}

export default Imageitem;