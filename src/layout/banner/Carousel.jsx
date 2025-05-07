import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Banner from './Banner';

const Carousel = () => {

    const bannerData = [
        {
            title: 'Flavors that dance with color, A journey your taste buds will never forget',
            imageUrl: 'https://i.postimg.cc/nr0xHrtj/pexels-marty-shih-2147889088-31893699.jpg',
            buttonText: ['View Menu', 'Book a Table']
        },
        {
            title: 'Where every bite tells a story, And every dish is a celebration.',
            imageUrl: 'https://i.postimg.cc/J05yQgC7/patrick-tomasso-GXXYk-Swnd-P4-unsplash.jpg',
            buttonText: ['View Menu', 'Book a Table']
        },
        {
            title: 'Not just a meal — it’s a flavorful escape, Crafted with soul, served with color.',
            imageUrl: 'https://i.postimg.cc/VkxYdR2K/pexels-chanwalrus-941861.jpg',
            buttonText: ['View Menu', 'Book a Table']
        },
    ];


    return (
        <><Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                bannerData.map((info, idx) => <SwiperSlide key={idx}><Banner info={info}></Banner></SwiperSlide>)
            }
        </Swiper>
        </>
    );
};

export default Carousel;