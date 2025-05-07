// import React from 'react';
// import { Link } from 'react-router';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <div className="min-h-screen py-12 px-4 bg-base-100">
//       <p className='text-5xl font-bold text-center mb-12'>About Us</p>

//       <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>

//         {/* Text Section */}
//         {/* <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className='space-y-6 min-h-screen'
//         >
//           <p className='italic text-3xl font-bold text-center'>Who are we?</p>
//           <p>
//             <strong>Fusion Ghor</strong> is more than just a place to eat — it’s where flavor, hospitality, and passion come together. 
//             We blend tradition with innovation to create an experience that satisfies both heart and appetite. With fresh ingredients, warm service, 
//             and a welcoming vibe, we aim to make every visit a little more special. Welcome to 
//             <strong> Fusion Ghor</strong>, where good food meets good people.
//           </p>
//           <div className='text-center'>
//             <Link to='/contact'>
//               <button className='btn btn-info'>Contact</button>
//             </Link>
//           </div>
//         </motion.div> */}


//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <p className='italic text-3xl font-bold text-center mb-6'>Who Are We?</p>
//           <div className="join join-vertical bg-base-100">
//             <div className="collapse collapse-arrow join-item border-base-300 border">
//               <input type="radio" name="faq" defaultChecked />
//               <div className="collapse-title font-semibold">Our Story</div>
//               <div className="collapse-content text-sm">
//                 Our Story is a journey of passion, culture, and flavor — bringing people together through authentic recipes and heartfelt hospitality.
//               </div>
//             </div>
//             <div className="collapse collapse-arrow join-item border-base-300 border">
//               <input type="radio" name="faq" />
//               <div className="collapse-title font-semibold">Get to Know Us</div>
//               <div className="collapse-content text-sm">
//                 Get to Know Us — a team driven by flavor, tradition, and care, creating memorable dining experiences with every plate we serve.
//               </div>
//             </div>
//             <div className="collapse collapse-arrow join-item border-base-300 border">
//               <input type="radio" name="faq" />
//               <div className="collapse-title font-semibold">Behind Fusion Ghor</div>
//               <div className="collapse-content text-sm">
//                 Behind Fusion Ghor lies a passion for blending tradition with creativity, serving food that tells a story with every delicious bite.
//               </div>
//             </div>
//             <div className='text-center mt-4'>
//               <Link to='/contact'>
//                 <button className='btn btn-info'>Contact</button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>


//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex items-center justify-center"
//         >
//           <img
//             src="https://i.postimg.cc/FzMQcnBc/talking-employees.jpg"
//             alt="Employees talking inside Fusion Ghor restaurant"
//             className="w-full h-full object-cover rounded-lg shadow-lg max-h-[500px]"
//           />
//         </motion.div>

//         {/* Accordion Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <p className='italic text-3xl font-bold text-center mb-6'>What's special?</p>
//           <div className="join join-vertical bg-base-100">
//             <div className="collapse collapse-arrow join-item border-base-300 border">
//               <input type="radio" name="faq" defaultChecked />
//               <div className="collapse-title font-semibold">Fresh, locally-sourced ingredients in every dish.</div>
//               <div className="collapse-content text-sm">
//                 We serve fresh, locally-sourced ingredients — supporting local farms while delivering natural flavor, quality, and seasonal goodness in every bite.
//               </div>
//             </div>
//             <div className="collapse collapse-arrow join-item border-base-300 border">
//               <input type="radio" name="faq" />
//               <div className="collapse-title font-semibold">A unique blend of traditional and fusion recipes.</div>
//               <div className="collapse-content text-sm">
//                 We combine traditional recipes with modern fusion techniques, offering a unique dining experience that celebrates both heritage and innovation.
//               </div>
//             </div>
//             <div className="collapse collapse-arrow join-item border-base-300 border">
//               <input type="radio" name="faq" />
//               <div className="collapse-title font-semibold">100% Halal-certified meals.</div>
//               <div className="collapse-content text-sm">
//                 We proudly serve 100% Halal-certified meals, ensuring every dish meets strict dietary standards without compromising on flavor or quality.
//               </div>
//             </div>
//             <div className='text-center mt-4'>
//               <Link to='/contact'>
//                 <button className='btn btn-info'>Gallery</button>
//               </Link>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-base-100">
      <p className='text-5xl font-bold text-center mb-12'>About Us</p>

      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>

        {/* Who Are We Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full"
        >
          <p className='italic text-3xl font-bold text-center mb-6'>Who Are We?</p>
          <div className="join join-vertical bg-base-100 flex-1">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="who" defaultChecked />
              <div className="collapse-title font-semibold">Our Story</div>
              <div className="collapse-content text-sm">
                Our Story is a journey of passion, culture, and flavor — bringing people together through authentic recipes and heartfelt hospitality.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="who" />
              <div className="collapse-title font-semibold">Get to Know Us</div>
              <div className="collapse-content text-sm">
                Get to Know Us — a team driven by flavor, tradition, and care, creating memorable dining experiences with every plate we serve.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="who" />
              <div className="collapse-title font-semibold">Behind Fusion Ghor</div>
              <div className="collapse-content text-sm">
                Behind Fusion Ghor lies a passion for blending tradition with creativity, serving food that tells a story with every delicious bite.
              </div>
            </div>
            <div className='text-center mt-4'>
              <Link to='/contact'>
                <button className='btn btn-info'>Contact</button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center h-full"
        >
          <img
            src="https://i.postimg.cc/FzMQcnBc/talking-employees.jpg"
            alt="Employees talking inside Fusion Ghor restaurant"
            className="w-full h-full object-cover rounded-lg shadow-lg max-h-[500px]"
          />
        </motion.div>

        {/* What's Special Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full"
        >
          <p className='italic text-3xl font-bold text-center mb-6'>What's Special?</p>
          <div className="join join-vertical bg-base-100 flex-1">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="special" defaultChecked />
              <div className="collapse-title font-semibold">Fresh, locally-sourced ingredients in every dish.</div>
              <div className="collapse-content text-sm">
                We serve fresh, locally-sourced ingredients — supporting local farms while delivering natural flavor, quality, and seasonal goodness in every bite.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="special" />
              <div className="collapse-title font-semibold">A unique blend of traditional and fusion recipes.</div>
              <div className="collapse-content text-sm">
                We combine traditional recipes with modern fusion techniques, offering a unique dining experience that celebrates both heritage and innovation.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="special" />
              <div className="collapse-title font-semibold">100% Halal-certified meals.</div>
              <div className="collapse-content text-sm">
                We proudly serve 100% Halal-certified meals, ensuring every dish meets strict dietary standards without compromising on flavor or quality.
              </div>
            </div>
            <div className='text-center mt-4'>
              <Link to='/gallery'>
                <button className='btn btn-info'>Gallery</button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
