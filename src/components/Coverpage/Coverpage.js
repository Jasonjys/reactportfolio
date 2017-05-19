import React, { Component } from 'react';
import './Coverpage.css'

class Coverpage extends Component {
	render () {
		return (
				<header>
					<div className="header-content">
						<div className="header-content-inner">
							<h1 id="homeHeading">Yaoshen Jiang</h1>
							<hr/>
							<h2 id="homeHeading">Software Developer</h2>
						</div>
						<a href="#about" className="btn btn-primary btn-xl page-scroll">Find Out More</a>
					</div>
				</header>
		);
	}
}

export default Coverpage;

//<a href="#about" className="btn btn-primary btn-xl page-scroll">Find Out More</a>