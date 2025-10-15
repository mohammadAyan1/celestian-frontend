import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPlane, 
  FaHotel, 
  FaGlobe, 
  FaCar, 
  FaBell, 
  FaUser, 
  FaBars,
  FaChevronDown,
  FaEllipsisH
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: 'Listings',
      submenu: [
        { name: 'All Listings', href: '#' },
        { name: 'Featured', href: '#' },
        { name: 'Popular', href: '#' },
        { name: 'New Arrivals', href: '#' }
      ]
    },
    {
      name: 'Pages',
      submenu: [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'FAQ', href: '#' }
      ]
    },
    {
      name: 'Accounts',
      submenu: [
        { name: 'Profile', href: '#' },
        { name: 'Bookings', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Logout', href: '#' }
      ]
    }
  ];

  const serviceTabs = [
    { id: 'hotel', name: 'Hotel', icon: FaHotel },
    { id: 'flight', name: 'Flight', icon: FaPlane },
    // { id: 'tour', name: 'Tour', icon: FaGlobe },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left Side - Logo and Menu */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={logo} 
                alt="Logo" 
                className="h-30 overflow-y-hidden lg:h-44 w-auto object-contain"
              />
              
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    <span>{item.name}</span>
                    <motion.div
                      animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaChevronDown className="text-xs" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              
            </div>
          </div>

          {/* Right Side - Service Tabs and Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Service Tabs - Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-4 bg-gray-100 rounded-lg p-1">
              {serviceTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-white hover:text-gray-800'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon className="text-lg" />
                  <span className="font-medium">{tab.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <motion.button
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
              >
                <FaBell className="text-lg sm:text-xl" />
                <span className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></span>
              </motion.button>
              
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <FaUser className="text-gray-600 text-sm sm:text-lg" />
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-lg sm:text-xl" />
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-4">
                {/* Service Tabs for Mobile */}
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Services</h3>
                  <div className="space-y-2">
                    {serviceTabs.map((tab) => (
                      <motion.button
                        key={tab.id}
                        onClick={() => {
                          handleTabClick(tab.id);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          activeTab === tab.id
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <tab.icon className="text-lg" />
                        <span className="font-medium">{tab.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Menu Items */}
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
                    >
                      <span>{item.name}</span>
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronDown className="text-xs" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 space-y-2"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
