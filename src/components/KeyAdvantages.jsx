import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPlane,  
  FaShieldAlt,
  FaHeart,
  FaStar,
  FaArrowRight,
  FaCheck,
  FaGlobe,
  FaUsers,
  FaClock
} from 'react-icons/fa';

const KeyAdvantages = () => {
  const advantages = [
    {
      id: 1,
      icon: FaMapMarkerAlt,
      title: "Expert Local Guides",
      description: "Discover hidden gems with our knowledgeable local guides who know every corner of your destination to create memories.",
      color: "bg-blue-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
      features: ["Local Expertise", "Hidden Gems", "Authentic Experiences"],
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      icon: FaPlane,
      title: "Seamless Travel",
      description: "Flights to accommodations, we handle all travel so you can focus on creating memories by your loved ones.",
      color: "bg-green-500",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600",
      features: ["Flight Bookings", "Hotel Reservations", "Airport Transfers"],
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 3,
      icon: FaHeart,
      title: "Great Experiences",
      description: "Every journey is tailored to your preferences, ensuring you get the most out of your travel adventure memorable.",
      color: "bg-pink-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      iconColor: "text-pink-600",
      features: ["Custom Itineraries", "Personal Preferences", "Tailored Services"],
      gradient: "from-pink-400 to-pink-600"
    },
    {
      id: 4,
      icon: FaShieldAlt,
      title: "24/7 Support",
      description: "Round-the-clock assistance and support throughout journey, ensuring the peace of mind wherever you go next.",
      color: "bg-purple-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
      features: ["24/7 Assistance", "Emergency Support", "Peace of Mind"],
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <div className="py-10 overflow-x-hidden bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Why Choose{' '}
            <span className="text-blue-600">Us?</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We make travel dreams come true with expert planning and exceptional service that ensures every journey is unforgettable.
          </motion.p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`${advantage.bgColor} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200 relative overflow-hidden`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-10 h-10 ${advantage.color} rounded-xl flex items-center justify-center mb-6 shadow-md relative z-10`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <advantage.icon className="text-xl text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    
                   
                    style={{
                      background: `linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)`,
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    {advantage.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-600 leading-relaxed mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      color: "#3b82f6"
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.1,
                      hover: { duration: 0.3 }
                    }}
                  >
                    {advantage.description}
                  </motion.p>

                  {/* Features List */}
                  <motion.div
                    className="space-y-1.5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {advantage.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          x: 5,
                          scale: 1.05
                        }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.7 + index * 0.1 + featureIndex * 0.1,
                          hover: { duration: 0.2 }
                        }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2
                          }}
                        >
                          <FaCheck className={`text-sm ${advantage.iconColor}`} />
                        </motion.div>
                        <motion.span 
                          className="text-sm text-gray-600"
                          whileHover={{ color: "#3b82f6" }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature}
                        </motion.span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Animated Underline */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${advantage.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default KeyAdvantages;
