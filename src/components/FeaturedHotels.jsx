import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaStar, 
  FaMapMarkerAlt, 
  FaWifi, 
  FaSwimmingPool, 
  FaCar, 
  FaUtensils,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';
import card4 from '../assets/card4.jpg';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.jpg';

const FeaturedHotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(4);

  // Handle responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hotel data
  const hotels = [
    {
      id: 1,
      image: card1,
      name: "Luxury Resort & Spa",
      location: "Maldives",
      rating: 4.8,
      price: 450,
      originalPrice: 650,
      amenities: ["WiFi", "Pool", "Parking", "Restaurant"],
      discount: "30% OFF"
    },
    {
      id: 2,
      image: card2,
      name: "Grand Palace Hotel",
      location: "Paris",
      rating: 4.6,
      price: 320,
      originalPrice: 480,
      amenities: ["WiFi", "Pool", "Parking", "Restaurant"],
      discount: "25% OFF"
    },
    {
      id: 3,
      image: card3,
      name: "Mountain View Lodge",
      location: "Switzerland",
      rating: 4.7,
      price: 280,
      originalPrice: 420,
      amenities: ["WiFi", "Pool", "Parking", "Restaurant"],
      discount: "33% OFF"
    },
    {
      id: 4,
      image: card4,
      name: "Beachfront Paradise",
      location: "Bali",
      rating: 4.9,
      price: 380,
      originalPrice: 550,
      amenities: ["WiFi", "Pool", "Parking", "Restaurant"],
      discount: "31% OFF"
    },
    {
      id: 5,
      image: card5,
      name: "Urban City Hotel",
      location: "Tokyo",
      rating: 4.5,
      price: 250,
      originalPrice: 380,
      amenities: ["WiFi", "Pool", "Parking", "Restaurant"],
      discount: "34% OFF"
    },
    {
      id: 6,
      image: card6,
      name: "Desert Oasis Resort",
      location: "Dubai",
      rating: 4.8,
      price: 520,
      originalPrice: 750,
      amenities: ["WiFi", "Pool", "Parking", "Restaurant"],
      discount: "31% OFF"
    }
  ];

  const totalCards = hotels.length;

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= totalCards - cardsToShow ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, totalCards, cardsToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= totalCards - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? totalCards - cardsToShow : prevIndex - 1
    );
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity) {
      case "WiFi": return <FaWifi className="text-blue-500" />;
      case "Pool": return <FaSwimmingPool className="text-cyan-500" />;
      case "Parking": return <FaCar className="text-gray-500" />;
      case "Restaurant": return <FaUtensils className="text-orange-500" />;
      default: return <FaWifi className="text-blue-500" />;
    }
  };

  return (
    <div className="py-6 overflow-x-hidden sm:py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-blue-600">Hotels</span>
          </motion.h2>
          <motion.p
            className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover our handpicked selection of premium hotels offering exceptional comfort and unforgettable experiences.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative md:-mt-10">
          {/* Navigation Arrows - Hidden on mobile */}
          <motion.button
            className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaChevronLeft className="text-gray-600 group-hover:text-blue-600 transition-colors" />
          </motion.button>

          <motion.button
            className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaChevronRight className="text-gray-600 group-hover:text-blue-600 transition-colors" />
          </motion.button>

          {/* Mobile Navigation Buttons - Positioned on cards */}
          <motion.button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 sm:hidden"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaChevronLeft className="text-gray-600 text-lg" />
          </motion.button>

          <motion.button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 sm:hidden"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaChevronRight className="text-gray-600 text-lg" />
          </motion.button>

          {/* Cards Container */}
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex transition-transform py-2 sm:py-5 duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`
              }}
            >
              {hotels.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  className="flex-shrink-0 px-3 sm:px-3"
                  style={{ width: `${100 / cardsToShow}%` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Hotel Image */}
                    <div className="relative h-52 sm:h-60 overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                        <span className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                          {hotel.discount}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Hotel Content */}
                    <div className="px-3 sm:px-4 py-3 sm:py-5">
                      {/* Hotel Name & Location */}
                      <div className="mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                          {hotel.name}
                        </h3>
                        <div className="flex items-center text-gray-600">
                          <FaMapMarkerAlt className="text-blue-500 mr-1 sm:mr-2 text-xs sm:text-sm" />
                          <span className="text-xs sm:text-sm">{hotel.location}</span>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-xs sm:text-sm ${
                                i < Math.floor(hotel.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-600 font-medium">
                          {hotel.rating}
                        </span>
                      </div>

                      {/* Amenities */}
                      <div className="flex items-center space-x-1 sm:space-x-2.5 mb-2 sm:mb-3">
                        {hotel.amenities.slice(0, cardsToShow === 1 ? 2 : 4).map((amenity, idx) => (
                          <div key={idx} className="flex items-center space-x-1">
                            <div className="text-xs sm:text-sm">
                              {getAmenityIcon(amenity)}
                            </div>
                            <span className="text-xs text-gray-600 hidden sm:inline">{amenity}</span>
                          </div>
                        ))}
                        {cardsToShow === 1 && hotel.amenities.length > 2 && (
                          <span className="text-xs text-gray-500">+{hotel.amenities.length - 2}</span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-2 sm:mb-0">
                        <div>
                          <span className="text-lg sm:text-xl font-bold text-green-600">
                            ${hotel.price}
                          </span>
                          <span className="text-gray-500 text-xs sm:text-sm ml-1 sm:ml-2">/night</span>
                        </div>
                        <div className="text-right">
                          <div className="text-xs sm:text-sm text-gray-400 line-through">
                            ${hotel.originalPrice}
                          </div>
                        </div>
                      </div>

                      {/* Book Now Button */}
                      <motion.button
                        className="w-full mt-2 sm:mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-2 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 group-hover:shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
