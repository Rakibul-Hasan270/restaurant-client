import React from 'react'
import { useNavigate } from 'react-router';

const Cta = () => {
    const navigate = useNavigate();

    return (
        <div
            className="w-full bg-center bg-cover h-[38rem]"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(21, 21, 21, 0.6), rgba(21, 21, 21, 0.6)), url('https://i.postimg.cc/4yy96sNs/c4a0278b-dd1c-421b-80c9-ea4bee7258f4.jpg')`
            }}
        >
            <div className="w-full h-full flex flex-col justify-center items-center text-white px-4 text-center">
                <p className="text-4xl lg:text-5xl font-bold max-w-3xl">
                    Fresh & Delicious Meals Delivered to You!
                </p>
                <h1 className="text-xl lg:text-2xl font-medium mt-4">
                    Place your order now and enjoy a 20% discount!
                </h1>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-6">
                    <button
                        onClick={() => navigate('/menu')}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-lg"
                    >
                        🍽️ Order Now
                    </button>

                    <button
                        onClick={() => navigate('/reserve')}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-md transition duration-300 shadow-lg"
                    >
                        📅 Reserve a Table
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cta;
