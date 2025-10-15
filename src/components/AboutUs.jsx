import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaComments, 
  FaCalendarAlt,
  FaChartBar,
  FaPlus,
  FaDollarSign
} from 'react-icons/fa';
import aboutpage from '../assets/aboutpage.jpg';

const AboutUs = () => {
  const features = [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "Global Navigation",
      description: "Clients navigate their journeys, whether for travel or educational purposes, primarily in Canada, the U.S., and the U.K.",
      color: "bg-red-500",
      iconColor: "text-white"
    },
    {
      id: 2,
      icon: FaComments,
      title: "Comprehensive Services",
      description: "Provides a range of services from immigration advice to study-abroad support and vacation planning.",
      color: "bg-green-500",
      iconColor: "text-white"
    },
    {
      id: 3,
      icon: FaCalendarAlt,
      title: "Flexible Planning",
      description: "Easy booking system with flexible dates and personalized itineraries to match your travel preferences.",
      color: "bg-blue-500",
      iconColor: "text-white"
    }
  ];

  return (
    <div className="pt-6 sm:pt-8 md:pb-0 pb-8 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
          {/* Left Section - Image with Overlays */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Image Container */}
            <motion.div
              className="relative overflow-hidden max-w-lg mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={aboutpage}
                  alt="DreamsTour Team"
                  className="w-full h-[50vh] sm:h-[70vh] md:h-[94vh] object-cover rounded-xl sm:rounded-2xl"
                />
                
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            className="space-y-4 -mt-6 lg:mt-0 md:-mt-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >

            {/* Main Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Explore Beyond the Horizon:{' '}
              <span className="text-blue-600">Discover the World's Wonders</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We pride ourselves on offering personalized services for high-end clientele, with a commitment to crafting & unforgettable traveling.
            </motion.p>

            {/* Features */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex items-start space-x-3 sm:space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  {/* Feature Icon */}
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className={`text-sm sm:text-lg ${feature.iconColor}`} />
                  </motion.div>

                  {/* Feature Content */}
                  <div className="flex-1">
                    <motion.h3
                      className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm sm:text-base text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {feature.description}
                    </motion.p>
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

export default AboutUs;
