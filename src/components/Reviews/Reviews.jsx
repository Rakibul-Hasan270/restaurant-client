import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Marquee from "react-fast-marquee";

const Reviews = () => {

    const getData = async () => {
        const res = await axios('/review.json');
        return res.data;
    };

    const { data = [] } = useQuery({
        queryKey: ['review'],
        queryFn: getData
    });

    return (
        <div className='max-w-6xl mx-auto px-4 py-12'>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Real Stories from Real Guests</h2>
            <p className='text-center mb-10 max-w-3xl mx-auto'>
                We value every bite and every opinion. Here’s what our amazing customers have to say about their experience at our restaurant — from the food to the service and everything in between.
            </p>

            <Marquee pauseOnHover speed={60} gradient={false}>
                {data.map((review) => (
                    <div
                        key={review.id}
                        className="w-80 md:w-96 mx-4 px-6 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                    >
                        <div className="flex justify-center mb-4">
                            <img
                                className="w-20 h-20 object-cover rounded-full border-2 border-blue-500"
                                src={review.avatar}
                                alt={review.name}
                            />
                        </div>

                        <h3 className="text-lg font-semibold text-center  dark:text-white">
                            {review.title}
                        </h3>

                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 text-center">
                            {review.review}
                        </p>

                        {/* <div className="flex justify-center mt-4 text-yellow-400">
                            {Array.from({ length: review.rating }, (_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div> */}

                        <p className="text-center mt-3 text-blue-600 dark:text-blue-300 font-medium">
                            — {review.name}
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Reviews;
