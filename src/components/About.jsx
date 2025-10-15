import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaCheck } from 'react-icons/fa';
import flightservices from '../assets/flightservices.jpg';

const About = () => {
  return (
    <section 
      className="about-one overflow-x-hidden py-8 sm:py-10 relative bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-title text-left mb-6 sm:mb-8">
              {/* <span className="section-title__tagline text-blue-500 font-medium mb-2 block text-sm sm:text-base">
                Get to know us
              </span> */}
              <h2 className="section-title__title text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                Our airline saves your time and gives you comfort in flights
              </h2>
            </div>

            <p className="about-one__text text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              Experience premium air travel with our state-of-the-art fleet and exceptional service. 
              We prioritize your comfort and safety while ensuring timely arrivals at your destination.
            </p>

            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Modern aircraft with latest safety technology",
                "Experienced pilots and professional crew"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <FaCheck className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-sm sm:text-base" />
                  <span className="text-sm sm:text-base text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
              <motion.button
                className="bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover more
              </motion.button>

              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <FaPhone className="text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <span className="block text-xs sm:text-sm text-gray-500">Call Anytime</span>
                  <a href="tel:+1234567890" className="text-sm sm:text-lg font-medium hover:text-blue-500 transition-colors">
                    +1 (234) - 567-890
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-one__img-box relative">
              <div className="rounded-lg shadow-xl w-full h-80 sm:h-96 overflow-hidden relative">
                <img 
                  src={flightservices} 
                  alt="Premium Flight Services - Professional Air Travel"
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for better contrast if needed */}
                <div className="absolute inset-0 bg-black/5"></div>
              </div>

              <motion.div 
                className="about-one__satisfied absolute -bottom-4 -right-6 sm:-bottom-6 sm:right-8 bg-white p-4 sm:p-4 rounded-lg shadow-lg flex items-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-500 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <motion.h3 
                    className="count-text text-xl sm:text-2xl font-bold text-blue-500 mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    8800 +
                  </motion.h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Satisfied Clients</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
