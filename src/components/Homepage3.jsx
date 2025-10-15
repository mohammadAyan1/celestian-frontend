import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaWalking, 
  FaSearch,
  FaStar,
  FaHeadphones
} from 'react-icons/fa';

const Homepage3 = () => {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    tourType: ''
  });

  const [dropdowns, setDropdowns] = useState({
    location: false,
    date: false,
    tourType: false
  });

  const locations = ['Maldives', 'Bali', 'Thailand', 'Japan', 'Italy', 'Greece'];
  const tourTypes = ['Adventure', 'Cultural', 'Relaxation', 'Wildlife', 'Historical', 'Food & Wine'];
  const dates = ['This Week', 'Next Week', 'This Month', 'Next Month', 'Custom Date'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching tours with:', formData);
    // Add tour search functionality here
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
    <div className="min-h-screen relative overflow-hidden" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Mountain and Adventure Background */}
        <div className="absolute bottom-0 left-0 w-full h-3/4">
          <div className="relative w-full h-full">
            {/* Mountain */}
            <motion.div
              className="absolute left-0 bottom-0 w-1/3 h-full"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <div className="w-full h-full bg-gradient-to-t from-gray-400 to-white rounded-t-full shadow-2xl"></div>
            </motion.div>
            
            {/* Climbers */}
            <motion.div
              className="absolute right-1/4 bottom-1/3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="flex flex-col space-y-3">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">🧗</div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg">🧗</div>
              </div>
            </motion.div>
          </div>
        </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content - Hero Text */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Life Is Adventure
            </motion.h1>
            
            <motion.h2
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Make The Best Of It
            </motion.h2>
            
            <motion.p
              className="text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Planning for a trip? we will organize your best trip with the best destination and within the best budgets!
            </motion.p>
          </motion.div>

          {/* Right Content - Promotional Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Discount Badge */}
              <motion.div
                className="absolute top-6 left-6 z-10"
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  40%
                </div>
              </motion.div>

              {/* Tour Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-6 py-3 rounded-full">5 Days / 4 Nights</span>
                </div>
              </div>

              {/* Tour Details */}
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                    Adventure
                  </span>
                      <div className="flex items-center space-x-2">
                        <FaStar className="text-yellow-500 text-xl" />
                        <span className="text-gray-600 font-medium">4.5</span>
                      </div>
                </div>
                
                <h3 className="font-bold text-2xl text-gray-800 leading-tight">
                  Maldives Sightseeing & Adventure Tour
                </h3>
                
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 font-bold text-3xl">$385</span>
                  <span className="text-gray-400 text-sm">/person</span>
                  <span className="text-gray-400 text-sm line-through">$682</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Search Form Section */}
      <motion.div
        className="relative -mt-24 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <motion.h2
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Plan Your Adventure
          </motion.h2>
          
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Location */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">Location</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-600 text-lg" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Select location"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-700 cursor-pointer"
                    onClick={() => toggleDropdown('location')}
                    readOnly
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                  
                  {dropdowns.location && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-50">
                      {locations.map((location, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-purple-50 cursor-pointer text-gray-700"
                          onClick={() => selectOption('location', location)}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Date */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">Date</label>
                <div className="relative">
                  <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-600 text-lg" />
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    placeholder="Choose a date"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-700 cursor-pointer"
                    onClick={() => toggleDropdown('date')}
                    readOnly
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                  
                  {dropdowns.date && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-50">
                      {dates.map((date, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-purple-50 cursor-pointer text-gray-700"
                          onClick={() => selectOption('date', date)}
                        >
                          {date}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Tour Type */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">Tour type</label>
                <div className="relative">
                  <FaWalking className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-600 text-lg" />
                  <input
                    type="text"
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleInputChange}
                    placeholder="Select type"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-700 cursor-pointer"
                    onClick={() => toggleDropdown('tourType')}
                    readOnly
                  />
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">▼</span>
                  
                  {dropdowns.tourType && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-50">
                      {tourTypes.map((type, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-purple-50 cursor-pointer text-gray-700"
                          onClick={() => selectOption('tourType', type)}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Take a Tour Button */}
              <motion.div
                className="flex items-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take a Tour
                </motion.button>
              </motion.div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Homepage3;
