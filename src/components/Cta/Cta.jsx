import React from 'react';

const Cta = () => {
    return (
        <div className="w-full bg-center bg-cover h-[38rem]" style={{
            backgroundImage: `linear-gradient(to right, #151515, rgba(21, 21, 21, 0)), url('https://i.postimg.cc/4yy96sNs/c4a0278b-dd1c-421b-80c9-ea4bee7258f4.jpg')`
        }}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                <div className="text-center">
                    <p className="text-6xl font-bold text-center">Fresh & Delicious Meals Delivered to You!</p>
                    <h1 className="text-3xl font-semibold text-white lg:text-4xl mt-4 mb-4">
                    Place your order now and enjoy a 20% discount!
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Cta;