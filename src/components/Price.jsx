import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlane, FaChevronLeft, FaChevronRight, FaCheck, FaClock, FaStar, FaUserTie, FaGlobe } from 'react-icons/fa';
import pricecart2 from '../assets/pricecart2.jpg';
import pricecart1 from '../assets/pricecart1.jpg';

const Price = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const flights = [
    {
      id: 1,
      image: pricecart1,
      date: 'Tuesday, Jul 6, 2022',
      departure: '11:25 pm',
      arrival: '02:25 am',
      price: 2786,
      person: 'Adult 3'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
      date: 'Wednesday, Jul 7, 2022',
      departure: '09:15 am',
      arrival: '12:45 pm',
      price: 3120,
      person: 'Adult 2'
    },
    {
      id: 3,
      image: pricecart2,
      date: 'Friday, Jul 9, 2022',
      departure: '03:30 pm',
      arrival: '07:15 pm',
      price: 2950,
      person: 'Adult 4'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % flights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [flights.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % flights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + flights.length) % flights.length);
  };

  const getVisibleFlights = () => {
    const slidesPerView = window.innerWidth >= 768 ? 2 : 1;
    const visibleFlights = [];
    
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentSlide + i) % flights.length;
      visibleFlights.push(flights[index]);
    }
    
    return visibleFlights;
  };

  return (
    <section className="price-one overflow-x-hidden pt-14 pb-8 relative" style={{ backgroundImage: "url('/images/price-1-bg-1.png')" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header Section */}
            <div className="bg-white rounded-2xl ml-6 shadow-xl p-6 sm:py-7 sm:px-8">
              <div className="section-title text-left mb-4">
               
                <h2 className="section-title__title text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-800">
                  Exclusive Private <br className="hidden sm:block" />
                  <span className="text-blue-600">Flight Options</span>
                </h2>
              </div>
              
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Experience unparalleled luxury and convenience with our premium charter services. 
                From business executives to celebrities, we provide personalized flight solutions 
                that prioritize your security.
              </p>
              
              <div className="flex items-center justify-center bg-blue-50 rounded-lg py-3 mb-3">
              

              <div className="grid grid-cols-2 gap-5">
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-600">15+</p>
                  <p className="text-xs text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-600">50+</p>
                  <p className="text-xs text-gray-600">Aircraft Fleet</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-600">100+</p>
                  <p className="text-xs text-gray-600">Destinations</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-blue-600">99.9%</p>
                  <p className="text-xs text-gray-600">On-Time Rate</p>
                </div>
              </div>
            
              </div>
            </div>

           

            {/* Additional Info Section */}
           
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative px-8 sm:px-12">
              {/* Flight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {getVisibleFlights().map((flight, index) => (
                  <motion.div
                    key={`${flight.id}-${currentSlide}-${index}`}
                    className="price-one__single rounded-xl shadow-lg overflow-hidden relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Background Image with Overlay */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${flight.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="price-one__top bg-blue-500/90 backdrop-blur-sm text-white p-4 flex justify-between items-center">
                        <p className="font-semibold">Departure</p>
                        <div className="text-white">
                          <FaPlane className="inline-block mx-2 text-xl" />
                        </div>
                        <p className="font-semibold">Arrival</p>
                      </div>
                      
                      <div className="price-one__content p-6 text-center">
                        <div className="price-one__img mb-6">
                          <div className="mx-auto h-20 w-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40">
                            <FaPlane className="text-3xl text-white" />
                          </div>
                        </div>
                        
                        <ul className="space-y-3 mb-6 text-left">
                          <li className="flex justify-between text-white">
                            <span className="text-white/80">Date:</span>
                            <span className="font-semibold">{flight.date}</span>
                          </li>
                          <li className="flex justify-between text-white">
                            <span className="text-white/80">Departure:</span>
                            <span className="font-semibold">{flight.departure}</span>
                          </li>
                          <li className="flex justify-between text-white">
                            <span className="text-white/80">Arrival:</span>
                            <span className="font-semibold">{flight.arrival}</span>
                          </li>
                          <li className="flex justify-between text-white">
                            <span className="text-white/80">Starting From:</span>
                            <span className="font-bold text-lg text-blue-300">${flight.price}</span>
                          </li>
                          <li className="flex justify-between text-white">
                            <span className="text-white/80">Person:</span>
                            <span className="font-semibold">{flight.person}</span>
                          </li>
                        </ul>
                        
                        <motion.button
                          className="thm-btn bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-block shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Book Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Navigation buttons - positioned outside the cards */}
              <button
                onClick={prevSlide}
                className="absolute left-0 sm:left-3 top-1/2 -translate-y-1/2 z-20 bg-blue-500 cursor-pointer hover:scale-110 text-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 sm:right-3 top-1/2 -translate-y-1/2 z-20 bg-blue-500 cursor-pointer hover:scale-110 text-white p-2 sm:p-3 rounded-full shadow-xl transition-all duration-300"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              {/* Slide indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {flights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-500 w-6 sm:w-8' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Price;
