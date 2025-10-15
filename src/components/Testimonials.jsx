import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const testimonials = [
    {
      id: 1,
      name: 'Jimmy Smith',
      role: 'Business Executive',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      content: 'Outstanding service! The flight was smooth, comfortable, and the crew was exceptionally professional. Highly recommend for business travel.'
    },
    {
      id: 2,
      name: 'Sarah Albert',
      role: 'Travel Enthusiast',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      content: 'Exceptional experience from booking to landing. The attention to detail and customer service exceeded all my expectations.'
    },
    {
      id: 3,
      name: 'Bonnie Tolbet',
      role: 'Corporate Manager',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      content: 'Professional, punctual, and luxurious. This airline truly understands what premium travel means. Will definitely fly again.'
    },
    {
      id: 4,
      name: 'Christine Eve',
      role: 'Frequent Flyer',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      content: 'Best flight experience ever! From the booking process to the in-flight service, everything was perfect and exceeded expectations.'
    }
  ];

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlide = testimonials.length - slidesPerView;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, slidesPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = testimonials.length - slidesPerView;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = testimonials.length - slidesPerView;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="testimonial-one py-8 sm:py-10 relative overflow-hidden bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-20"
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-40 h-40 bg-blue-100 rounded-full opacity-20"
        
         
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="section-title text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="section-title__title text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-800">
            What they're talking about <br className="hidden sm:block" /> 
            our flight services
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonial-one__bottom relative">
          <div className="relative">
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentSlide}-${index}`}
                  className="testimonial-one__single bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* User Avatar */}
                    <div className="testimonial-one__client-img-box flex-shrink-0">
                      <div className="relative mx-auto sm:mx-0 w-20 h-20 sm:w-24 sm:h-24">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=3B82F6&color=fff&size=128`;
                            }}
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                          <FaQuoteRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="testimonial-one__content flex-1">
                      <p className="testimonial-one__content-text text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="testimonial-one__rating flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        {/* Stars */}
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        {/* User Info */}
                        <div className="testimonial-one__user text-left sm:text-right">
                          <h4 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-blue-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300"
              >
                <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              {/* Slide Indicators */}
              <div className="flex gap-2">
                {testimonials.slice(0, testimonials.length - slidesPerView + 1).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-500 w-6 sm:w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300"
              >
                <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

