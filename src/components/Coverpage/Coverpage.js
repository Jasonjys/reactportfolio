import React from 'react';
import './Coverpage.css';

const Coverpage = ({img}) => {
    return (
        <div id='home' className='cover' style={{backgroundImage: `url(${img})`}}>
            <h1 className='title'>Yaoshen Jiang</h1>
            <h2 className='sub-title'>a passionate software developer</h2>
        </div>
    );
}

export default Coverpage;