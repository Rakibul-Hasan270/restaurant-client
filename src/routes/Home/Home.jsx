import React from 'react';
import Carousel from '../../layout/banner/Carousel';
import About from '../../layout/About/About';

const Home = () => {
    return (
        <div className='space-y-12'>
            <Carousel></Carousel>
            <About></About>
        </div>
    );
};

export default Home;