import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import img from '../../assets/Animation - 1746678949761.json'

const About = () => {
  return (
    <div className=" py-12 px-4 bg-base-100">
      <p className="text-5xl font-bold text-center mb-12">About Us</p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 items-stretch">

        {/* Who Are We Accordion Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-base-100 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between"
        >
          <p className='italic text-3xl font-bold text-center mb-6'>Who Are We?</p>
          <div className="join join-vertical">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="who" defaultChecked />
              <div className="collapse-title font-semibold">Our Story</div>
              <div className="collapse-content text-sm">
                Our Story is a journey of passion, culture, and flavor — bringing people together through authentic recipes and heartfelt hospitality.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="who" />
              <div className="collapse-title font-semibold">Get to Know Us</div>
              <div className="collapse-content text-sm">
                Get to Know Us — a team driven by flavor, tradition, and care, creating memorable dining experiences with every plate we serve.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="who" />
              <div className="collapse-title font-semibold">Behind Fusion Ghor</div>
              <div className="collapse-content text-sm">
                Behind Fusion Ghor lies a passion for blending tradition with creativity, serving food that tells a story with every delicious bite.
              </div>
            </div>
          </div>
          <div className='text-center mt-4'>
            <Link to='/contact'>
              <button className='btn btn-info'>Contact</button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-full flex items-center justify-center"
        >
          <div className=''>
            {/* <Lottie className='h-80' animationData={img} loop={true} /> */}
            <Lottie className='h-[500px] w-[600px]' animationData={img} loop={true} />
          </div>

        </motion.div>

        {/* What's Special Accordion Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-base-100 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between"
        >
          <p className='italic text-3xl font-bold text-center mb-6'>What's Special?</p>
          <div className="join join-vertical">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="special" defaultChecked />
              <div className="collapse-title font-semibold">Fresh, locally-sourced ingredients</div>
              <div className="collapse-content text-sm">
                We serve fresh, locally-sourced ingredients — supporting local farms while delivering natural flavor and seasonal goodness in every bite.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="special" />
              <div className="collapse-title font-semibold">Fusion & Traditional Recipes</div>
              <div className="collapse-content text-sm">
                We combine traditional recipes with modern fusion techniques to offer a dining experience that’s both unique and authentic.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="special" />
              <div className="collapse-title font-semibold">100% Halal-certified Meals</div>
              <div className="collapse-content text-sm">
                We proudly serve 100% Halal-certified meals, ensuring quality and flavor that meets the highest dietary standards.
              </div>
            </div>
          </div>
          <div className='text-center mt-4'>
            <Link to='/gallery'>
              <button className='btn btn-info'>Gallery</button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;