import React from 'react';
import './Coverpage.css';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    backgroundSize: 'cover'
}

const Coverpage = ({img}) => {
    return (
        <div id='home' style={{...styles, backgroundImage: `url(${img})`}}>
            <h1 className='title'>Yaoshen Jiang</h1>
            <h2 className='sub-title'>a passionate software developer</h2>
        </div>
    );
}

export default Coverpage;

//<a href="#about" className="btn btn-primary btn-xl page-scroll">Find Out More</a>