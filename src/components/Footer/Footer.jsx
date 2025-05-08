import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 pt-10 pb-6 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Logo / About */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-400">Foodie's Hub</h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Tasty. Fast. Yours. Serving happiness with every meal!
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#"><FaFacebookF className="hover:text-orange-400" /></a>
                        <a href="#"><FaInstagram className="hover:text-orange-400" /></a>
                        <a href="#"><FaYoutube className="hover:text-orange-400" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-orange-400">Home</a></li>
                        <li><a href="/menu" className="hover:text-orange-400">Menu</a></li>
                        <li><a href="/reserve" className="hover:text-orange-400">Reservation</a></li>
                        <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
                    <ul className="text-sm space-y-2">
                        <li>📞 +880 1234-567890</li>
                        <li>📍 Dhanmondi, Dhaka</li>
                        <li>📧 info@foodieshub.com</li>
                        <li>🕒 Open: 10am – 11pm</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Subscribe</h3>
                    <p className="text-sm text-gray-400 mb-2">Get special offers & updates</p>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white mb-3"
                    />
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded transition">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* Bottom Legal Section */}
            <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
                © 2025 Foodie's Hub. All rights reserved. | <a href="#" className="hover:text-orange-400">Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
