import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaUtensils, 
  FaClock, 
  FaShieldAlt, 
  FaBolt,
  FaThumbsUp,
  FaStar
} from 'react-icons/fa';
import hotelsection1 from '../assets/hotelsection1.jpg';
import hotelsection2 from '../assets/hotelsection2.jpg';
import hotelsection3 from '../assets/hotelsection3.jpg';
import hotelsection4 from '../assets/hotelsection4.jpg';

const HotelSection1 = () => {
  // Image slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hotelImages = [hotelsection1, hotelsection2, hotelsection3, hotelsection4];

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === hotelImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [hotelImages.length]);

  const features = [
    {
      icon: FaUtensils,
      title: "Quality Food",
      description: "Departure defective did adding worthy.",
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: FaClock,
      title: "Quick Services", 
      description: "Supposing so be resolving breakfast am or perfectly.",
      color: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: FaShieldAlt,
      title: "High Security",
      description: "Arranging rapturous did believe all supported.",
      color: "bg-orange-100", 
      iconColor: "text-orange-600"
    },
    {
      icon: FaBolt,
      title: "24 Hours Alert",
      description: "Rapturous did believe him all had supported.",
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="py-8 sm:py-15 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left Section - Image with Rating Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
            <div className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1 sm:space-y-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>

             {/* Main Hotel Image Slider */}
             <motion.div
               className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
             >
               <div className="aspect-[4/3] relative">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={currentImageIndex}
                     className="absolute inset-0"
                     initial={{ y: 100, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: -100, opacity: 0 }}
                     transition={{ 
                       duration: 0.8, 
                       ease: "easeInOut" 
                     }}
                     style={{
                       backgroundImage: `url(${hotelImages[currentImageIndex]})`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center',
                       backgroundRepeat: 'no-repeat'
                     }}
                   />
                 </AnimatePresence>
                 
                 
                 {/* Image counter indicator */}
                 <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 text-xs sm:text-sm font-semibold text-gray-800">
                   {currentImageIndex + 1} / {hotelImages.length}
                 </div>
               </div>

               {/* Client Rating Card */}
               <motion.div
                 className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl max-w-xs"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.8 }}
                 viewport={{ once: true }}
               >
                 <div className="flex items-center space-x-3 sm:space-x-4">
                   {/* Thumbs up icon */}
                   <div className="flex-shrink-0">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                       <FaThumbsUp className="text-blue-600 text-xs sm:text-sm" />
                     </div>
                   </div>
                   
                   <div className="flex-1">
                     <div className="grid grid-cols-2 gap-3 sm:gap-4">
                       {/* Client Section */}
                       <div>
                         <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1 sm:mb-2">Client</h4>
                         <div className="flex items-center space-x-1">
                           {/* Client avatars from Random User API */}
                           <img 
                             src="https://randomuser.me/api/portraits/men/32.jpg" 
                             alt="Client 1" 
                             className="w-4 h-4 sm:w-6 sm:h-6 rounded-full object-cover border border-white shadow-sm"
                           />
                           <img 
                             src="https://randomuser.me/api/portraits/women/44.jpg" 
                             alt="Client 2" 
                             className="w-4 h-4 sm:w-6 sm:h-6 rounded-full object-cover border border-white shadow-sm"
                           />
                           <img 
                             src="https://randomuser.me/api/portraits/men/22.jpg" 
                             alt="Client 3" 
                             className="w-4 h-4 sm:w-6 sm:h-6 rounded-full object-cover border border-white shadow-sm"
                           />
                           <img 
                             src="https://randomuser.me/api/portraits/women/68.jpg" 
                             alt="Client 4" 
                             className="w-4 h-4 sm:w-6 sm:h-6 rounded-full object-cover border border-white shadow-sm"
                           />
                          
                         </div>
                       </div>
                       
                       {/* Rating Section */}
                       <div>
                         <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">Rating</h4>
                         <div className="flex items-center space-x-1">
                           <span className="text-sm sm:text-lg font-bold text-gray-800">4.5</span>
                           <FaStar className="text-yellow-500 text-xs sm:text-sm" />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </motion.div>
             </motion.div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-xl sm:text-2xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The Best Holidays{' '}
              <span className="text-blue-600">Start Here!</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-lg text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Book your hotel with us and don't forget to grab an awesome hotel deal to save massive on your stay.
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors duration-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Feature Icon */}
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className={`text-sm sm:text-lg ${feature.iconColor}`} />
                  </motion.div>
                  
                  {/* Feature Content */}
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HotelSection1;
