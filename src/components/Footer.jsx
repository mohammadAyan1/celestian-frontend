import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaBuilding, 
  FaPlane, 
  FaGlobe, 
  FaCar,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCreditCard
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800">
      {/* Top Section - Five Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          
          {/* Company Information Column */}
          <div className="lg:col-span-1 text-left">
            {/* Logo */}
            <div className="flex items-center justify-start -mt-14 md:-mt-16">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-36 sm:h-40 w-auto object-contain"
              />
            </div>
            
           <div className='-mt-10 md:-mt-12'>
               {/* Description */}
               <p className="text-gray-600 mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base">
                Departure defective arranging all had supported.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-start space-x-3">
                  <FaPhone className="text-gray-600 text-sm" />
                  <span className="text-gray-600 text-sm sm:text-base">+1234 568 963</span>
                </div>
                <div className="flex items-center justify-start space-x-3">
                  <FaEnvelope className="text-gray-600 text-sm" />
                  <span className="text-gray-600 text-sm sm:text-base">example@gmail.com</span>
                </div>
              </div>
           </div>
          </div>

          {/* Page and Link Columns - Parallel on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-2">
            {/* Page Column */}
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Page</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">News and Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Meet a Team</a></li>
              </ul>
            </div>

            {/* Link Column */}
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Link</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Sign In</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Terms and Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Contact Support</a></li>
              </ul>
            </div>
          </div>

          {/* Global Site and Booking Columns - Parallel on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-2">
            {/* Global Site Column */}
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Global Site</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">India</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">California</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Indonesia</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Canada</a></li>
              </ul>
            </div>

            {/* Booking Column */}
            <div className="text-left">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Booking</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center justify-start space-x-3">
                  <FaBuilding className="text-gray-600 text-sm" />
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Hotel</a>
                </li>
                <li className="flex items-center justify-start space-x-3">
                  <FaPlane className="text-gray-600 text-sm" />
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Flight</a>
                </li>
                <li className="flex items-center justify-start space-x-3">
                  <FaGlobe className="text-gray-600 text-sm" />
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Tour</a>
                </li>
                <li className="flex items-center justify-start space-x-3">
                  <FaCar className="text-gray-600 text-sm" />
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base">Cabs</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            
            {/* Payment & Security */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Payment & Security</h3>
              <div className="flex space-x-4">
                {/* PayPal */}
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center hover:shadow-md transition-shadow">
                  <FaCcPaypal className="text-2xl text-blue-600" />
                </div>
                
                {/* Visa */}
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center hover:shadow-md transition-shadow">
                  <FaCcVisa className="text-2xl text-blue-800" />
                </div>
                
                {/* Mastercard */}
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center hover:shadow-md transition-shadow">
                  <FaCcMastercard className="text-2xl text-red-600" />
                </div>
                
                {/* Debit Card */}
                <div className="w-12 h-8 bg-white rounded border flex items-center justify-center hover:shadow-md transition-shadow">
                  <FaCreditCard className="text-2xl text-gray-700" />
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Follow us on</h3>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <FaFacebookF className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all">
                  <FaInstagram className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <FaLinkedinIn className="text-white" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
              Copyrights ©2025 Celestial Tours.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm">Privacy policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm">Terms and conditions</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-xs sm:text-sm">Refund policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
