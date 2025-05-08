import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const ItemCart = ({ item }) => {
    const { availability, category, description, image, is_veg, name, prep_time, price, rating, spice_level } = item;

    return (
        <Link  className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 border border-gray-600 hover:border-cyan-500">
            <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="object-cover w-full h-64"
                src={image}
                alt={name}
            />

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                        {category}
                    </span>
                    <h2 className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600">
                        {name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {description}
                    </p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Price:</strong> ৳{price}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Prep Time:</strong> {prep_time}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Spice Level:</strong> {spice_level || 'N/A'}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Type:</strong> {is_veg ? 'Veg' : 'Non-Veg'}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium text-yellow-500">
                                ⭐ {rating}/5
                            </p>
                            <p
                                className={`text-sm font-semibold ${availability === 'Available'
                                    ? 'text-green-600'
                                    : 'text-red-500'
                                    }`}
                            >
                                {availability}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ItemCart;
