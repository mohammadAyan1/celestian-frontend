import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUsers, 
  FaSearch, 
  FaPlay,
  FaHeadphones,
  FaStar
} from 'react-icons/fa';
import travelhome from '../assets/travelhome.jpg';
import travelcart from '../assets/travelcart.jpg';
import travelcart2 from '../assets/travelcart2.jpg';
import travelcart3 from '../assets/travelcart3.jpg';
import travelcart4 from '../assets/travelcart4.jpg';
import travelcart5 from '../assets/travelcart5.jpg';
import HotelSection1 from './HotelSection1';
import FeaturedHotels from './FeaturedHotels';
import KeyAdvantages from './KeyAdvantages';
import AboutUs from './AboutUs';

const Homepage1 = () => {
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    rooms: ''
  });

  const [dropdowns, setDropdowns] = useState({
    location: false,
    checkIn: false,
    guests: false
  });

  // Carousel state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Promotional cards data
  const promotionalCards = [
    {
      id: 1,
      image: travelcart,
      duration: "5 Days / 4 Nights",
      category: "Adventure",
      rating: 4.5,
      title: "Maldives Sightseeing & Adventure Tour",
      price: 385,
      originalPrice: 682,
      location: "Maldives"
    },
    {
      id: 2,
      image: travelcart2,
      duration: "7 Days / 6 Nights",
      category: "Luxury",
      rating: 4.8,
      title: "Paris Romantic Getaway Package",
      price: 1200,
      originalPrice: 1800,
      location: "Paris"
    },
    {
      id: 3,
      image: travelcart3,
      duration: "4 Days / 3 Nights",
      category: "Cultural",
      rating: 4.3,
      title: "Tokyo Cultural Experience Tour",
      price: 650,
      originalPrice: 950,
      location: "Tokyo"
    },
    {
      id: 4,
      image: travelcart4,
      duration: "6 Days / 5 Nights",
      category: "Beach",
      rating: 4.7,
      title: "Dubai Desert & Beach Adventure",
      price: 890,
      originalPrice: 1200,
      location: "Dubai"
    },
    {
      id: 5,
      image: travelcart5,
      duration: "8 Days / 7 Nights",
      category: "Nature",
      rating: 4.6,
      title: "Sydney Wildlife & Nature Tour",
      price: 1100,
      originalPrice: 1500,
      location: "Sydney"
    }
  ];

  // Auto-change cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => 
        prevIndex === promotionalCards.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [promotionalCards.length]);

  const locations = ['New York', 'London', 'Paris', 'Tokyo', 'Dubai', 'Sydney'];
  const guestOptions = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5+ Adults'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching with:', formData);
    // Add search functionality here
  };

  const toggleDropdown = (dropdown) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const selectOption = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setDropdowns(prev => ({
      ...prev,
      [field]: false
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{
        backgroundImage: `url(${travelhome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black/40 bg-opacity-30"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white order-2 lg:order-1"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold md:-mt-0 -mt-10 mb-4 md:mb-8 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Find the top{' '}
                <span className="relative text-blue-600">
                  Hotels nearby you
                  {/* <motion.div
                    className="absolute bottom-1 left-0 w-full h-1 bg-blue-300 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                  /> */}
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-lg text-gray-200 mb-5 sm:mb-7 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
               Experience the perfect balance of comfort & luxury without stretching your budget. We go beyond providing a stay. we create moments of relaxation, warmth, and indulgence that make you feel truly at home.
              </motion.p>
              
              <div className="flex flex-col md:mb-0 mb-6 sm:flex-row gap-4 sm:gap-6">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 sm:px-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Discover Now
                </motion.button>
                
            
              </div>
            </motion.div>

            {/* Right Content - Promotional Cards Carousel */}
            <motion.div
              className="relative mb-6 sm:mb-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Carousel Container */}
              <div className="relative h-80 sm:h-96 lg:h-104">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCardIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.9 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Promotional Card */}
                    <motion.div
                      className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-100 h-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative h-full flex flex-col">
                        {/* Card Image */}
                        <div className="h-60 sm:h-70 lg:h-78 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 relative overflow-hidden" style={{
                          backgroundImage: `url(${promotionalCards[currentCardIndex].image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}>
                          <div className="absolute inset-0 bg-black/30 bg-opacity-40 flex items-center justify-center">
                            <span className="text-white text-sm sm:text-lg font-semibold bg-black/50 bg-opacity-50 px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                              {promotionalCards[currentCardIndex].duration}
                            </span>
                          </div>
                        </div>
                        
                        {/* Card Content */}
                        <div className="space-y-3 sm:space-y-3.5 flex-1">
                          <div className="flex items-center justify-between">
                            <span className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${
                              promotionalCards[currentCardIndex].category === 'Adventure' ? 'bg-blue-100 text-blue-600' :
                              promotionalCards[currentCardIndex].category === 'Luxury' ? 'bg-purple-100 text-purple-600' :
                              promotionalCards[currentCardIndex].category === 'Cultural' ? 'bg-orange-100 text-orange-600' :
                              promotionalCards[currentCardIndex].category === 'Beach' ? 'bg-cyan-100 text-cyan-600' :
                              'bg-green-100 text-green-600'
                            }`}>
                              {promotionalCards[currentCardIndex].category}
                            </span>
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <FaStar className="text-yellow-500 text-sm sm:text-lg" />
                              <span className="text-gray-600 font-medium text-sm sm:text-base">{promotionalCards[currentCardIndex].rating}</span>
                            </div>
                          </div>
                          
                          <h3 className="font-bold text-lg sm:text-xl text-gray-800 leading-tight">
                            {promotionalCards[currentCardIndex].title}
                          </h3>
                          
                          <div className="flex items-center space-x-2 sm:space-x-3">
                            <span className="text-green-600 font-bold text-xl sm:text-2xl">${promotionalCards[currentCardIndex].price}</span>
                            <span className="text-gray-400 text-xs sm:text-sm">/person</span>
                            <span className="text-gray-400 text-xs sm:text-sm line-through">${promotionalCards[currentCardIndex].originalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Check Availability Section */}
      <motion.div
        className="relative -mt-12 sm:-mt-24 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-8 border border-gray-100">
          <motion.h2 
            className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Check Availability
          </motion.h2>
          
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
              {/* Location */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Location</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-lg">
                    <FaMapMarkerAlt />
                  </span>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Select location"
                    className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-700 cursor-pointer text-sm sm:text-base"
                    onClick={() => toggleDropdown('location')}
                    readOnly
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                  
                  {dropdowns.location && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-50">
                      {locations.map((location, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700"
                          onClick={() => selectOption('location', location)}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Check In - Out */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Check In - Out</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-lg">
                    <FaCalendarAlt />
                  </span>
                  <input
                    type="text"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    placeholder="10 Oct to 15 Oct"
                    className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-700 text-sm sm:text-base"
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                </div>
              </motion.div>

              {/* Guests & Rooms */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Guests & Rooms</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-lg">
                    <FaUsers />
                  </span>
                  <input
                    type="text"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="2 Adults 1 Room"
                    className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-700 cursor-pointer text-sm sm:text-base"
                    onClick={() => toggleDropdown('guests')}
                    readOnly
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                  
                  {dropdowns.guests && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-50">
                      {guestOptions.map((option, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-gray-700"
                          onClick={() => selectOption('guests', option)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Search Button */}
              <motion.div
                className="flex items-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaSearch className="text-xl" />
                  <span>Search</span>
                </motion.button>
              </motion.div>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Hotel Section */}
      <HotelSection1 />

      {/* Featured Hotels Section */}
      <FeaturedHotels />

      {/* Key Advantages Section */}
      <KeyAdvantages />

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default Homepage1;
