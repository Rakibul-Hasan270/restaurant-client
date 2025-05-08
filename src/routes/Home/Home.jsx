import React from 'react';
import Carousel from '../../layout/banner/Carousel';
import About from '../../layout/About/About';
import Menu from '../../components/Menu/Menu';
import Reviews from '../../components/Reviews/Reviews';
import Cta from '../../components/Cta/Cta';

const Home = () => {
    return (
        <div className='space-y-12'>
            <Carousel></Carousel>
            <About></About>
            <Menu></Menu>
            <Cta></Cta>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;