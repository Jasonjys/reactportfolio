import React, { Component } from 'react';
import './Coverpage.css'

class Coverpage extends Component {
    render () {
        return (
                <header>
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1 style={{color: "white"}}>Yaoshen Jiang</h1>
                            <h2 style={{color: "white"}}>Software Developer</h2>
                        </div>
                    </div>
                </header>
        );
    }
}

export default Coverpage;

//<a href="#about" className="btn btn-primary btn-xl page-scroll">Find Out More</a>