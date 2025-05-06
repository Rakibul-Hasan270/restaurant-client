import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Banner from './Banner';

const Carousel = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Banner></Banner></SwiperSlide>
                <SwiperSlide><Banner></Banner></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;