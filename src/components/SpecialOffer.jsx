import React from 'react';
import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';
import specialoffer from '../assets/specialoffer.jpg';

const SpecialOffer = () => {
  return (
    <section className="special-offer-one relative overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Content */}
        <motion.div 
          className="special-offer-one__left lg:w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 sm:p-10 lg:p-16 xl:p-20 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

          {/* Floating Plane Animation */}
          <motion.div
            className="absolute top-10 right-10 opacity-20"
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaPlane className="text-6xl sm:text-8xl text-white" />
          </motion.div>
          
          <div className="relative z-10">
            <div className="section-title text-left mb-6 sm:mb-8">
              <span className="section-title__tagline text-white/90 font-semibold mb-2 sm:mb-3 block text-sm sm:text-base uppercase tracking-wider">
                Trips become easy with us
              </span>
              <h2 className="section-title__title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                The best service <br className="hidden sm:block" /> 
                for business people <br className="hidden sm:block" /> 
                who appreciate time
              </h2>
            </div>
            
            <p className="special-offer-one__left-text mb-6 sm:mb-8 opacity-90 text-sm sm:text-base leading-relaxed">
              Experience premium air travel with our exclusive business class services. 
              We prioritize your comfort and time with dedicated support and luxury amenities.
            </p>
            
            <motion.button
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-block text-sm sm:text-base shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover more
            </motion.button>
          </div>
        </motion.div>
        
        {/* Right Side - Image */}
        <motion.div 
          className="special-offer-one__right lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={specialoffer} 
              alt="Special Offer - Premium Flight Services"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* Decorative Badge */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-8 lg:-left-12 bg-blue-600 text-white px-3 sm:px-4 py-6 sm:py-8 text-center shadow-xl z-10"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="font-bold text-xs sm:text-sm tracking-wider whitespace-nowrap">
              TRIPS & TOURS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;

