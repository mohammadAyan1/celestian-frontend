import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGem, FaShieldAlt, FaCalendarAlt, FaPlane, FaArrowRight, FaStar, FaCheck } from 'react-icons/fa';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  const features = [
    {
      id: 1,
      icon: FaGem,
      title: 'Luxury & Comfort',
      description: 'Experience unparalleled luxury with premium amenities, spacious cabins, and personalized your comfort.',
      gradient: 'from-purple-500 to-pink-500',
      stats: '99% Customer Satisfaction',
      link: '/luxury'
    },
    {
      id: 2,
      icon: FaShieldAlt,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with security protocols, experienced staff/ crew & safety equipment.',
      gradient: 'from-blue-500 to-cyan-500',
      stats: '15+ Years Accident-Free',
      link: '/safety'
    },
    {
      id: 3,
      icon: FaCalendarAlt,
      title: 'Personal Schedule',
      description: 'Fly on your terms with flexible scheduling, last-minute bookings, and personalized travel itineraries.',
      gradient: 'from-green-500 to-emerald-500',
      stats: '24/7 Availability',
      link: '/schedule'
    },
    {
      id: 4,
      icon: FaPlane,
      title: 'Global Network',
      description: 'Access to over 100 destinations worldwide with our extensive network of partner airports and FBOs.',
      gradient: 'from-orange-500 to-red-500',
      stats: '100+ Destinations',
      link: '/airports'
    }
  ];

  return (
    <section className="feature-one py-8 sm:py-10 relative overflow-hidden">
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
 
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Card */}
              <motion.div
                className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 h-full overflow-hidden shadow-lg hover:shadow-2xl"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Icon Container */}
                <motion.div
                  className={`relative mb-4 w-12 h-12 mx-auto bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="text-white text-2xl" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="bg-blue-100 rounded-lg p-3 mb-2">
                    <p className="text-blue-600 font-semibold text-sm">{feature.stats}</p>
                  </div>
               
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl -z-10`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
