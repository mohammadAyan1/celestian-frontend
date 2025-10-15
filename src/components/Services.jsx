import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlane, FaBriefcase, FaUserTie, FaStar } from 'react-icons/fa';
import businesscharter from '../assets/businesscharter.jpg';
import privatecharter from '../assets/privatecharter.jpg';
import jetrentals from '../assets/jetrental.jpg';
import highprofile from '../assets/highprofile.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FaBriefcase,
      image: businesscharter,
      category: 'Flight For',
      title: 'Business Charter',
      description: 'Premium flight services tailored for business professionals and corporate travel needs.',
      link: '/business-charter'
    },
    {
      id: 2,
      icon: FaPlane,
      image: privatecharter,
      category: 'Flight For',
      title: 'Private Charter',
      description: 'Exclusive private flight experiences with personalized service and luxury amenities.',
      link: '/private-charter'
    },
    {
      id: 3,
      icon: FaPlane,
      image: jetrentals,
      category: 'Flight For',
      title: 'Jet Rentals',
      description: 'Flexible jet rental options for short-term and long-term travel requirements.',
      link: '/jet-rentals'
    },
    {
      id: 4,
      icon: FaUserTie,
      image: highprofile,
      category: 'Flight For',
      title: 'High Profile People',
      description: 'Discreet and secure flight services for VIPs, celebrities, and executives.',
      link: '/high-profile'
    }
  ];

  return (
    <section className="services-one py-8 lg:py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-title text-center mb-8 sm:mb-12">
          {/* <span className="section-title__tagline text-blue-500 font-semibold mb-2 sm:mb-3 block text-sm sm:text-base uppercase tracking-wider">
            What We're Offering
          </span> */}
        <h2 className="section-title__title text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
  <span className="text-gray-800">Select the service </span>
 
  <span className="text-blue-600"> according  <br className="hidden sm:block" /> to your requirement</span>
</h2>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="services-one__single overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Image Section */}
              <div className="services-one__img relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                
                {/* Overlay with Icon */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  {/* <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="text-6xl sm:text-7xl lg:text-8xl text-white/90" />
                  </motion.div> */}
                </div>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4">
                  <FaStar className="text-white/60 text-2xl" />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="services-one__content p-4 sm:p-5 lg:p-6 bg-white relative">
                <div className="services-one__title-box mb-1.5 sm:mb-2">
                  {/* <span className="services-one__sub-title text-blue-500 text-xs sm:text-sm font-semibold block mb-1 uppercase tracking-wide">
                    {service.category}
                  </span> */}
                  <h3 className="services-one__title text-lg sm:text-xl font-bold mb-1 text-gray-800">
                    <a 
                      href={service.link} 
                      className="hover:text-blue-500 transition-colors duration-300"
                    >
                      {service.title}
                    </a>
                  </h3>
                </div>
                
                <p className="services-one__text text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
                
                <motion.div 
                  className="services-one__arrow text-blue-500 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <a href={service.link} className="flex items-center font-semibold text-sm sm:text-base">
                    <span className="mr-2">Read more</span>
                    <FaArrowRight className="text-sm" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

