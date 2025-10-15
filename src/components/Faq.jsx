import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaPlane, FaQuestionCircle, FaShieldAlt, FaClock, FaCreditCard, FaUserCheck } from 'react-icons/fa';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      category: 'Booking & Reservations',
      icon: FaPlane,
      questions: [
        {
          question: 'How far in advance should I book my private charter flight?',
          answer: 'We recommend booking your private charter flight at least 24-48 hours in advance for domestic flights and 3-7 days for international flights. However, we can accommodate last-minute bookings depending on aircraft availability. For the best selection and pricing, booking 1-2 weeks in advance is ideal.'
        },
        {
          question: 'Can I modify or cancel my booking after confirmation?',
          answer: 'Yes, you can modify or cancel your booking. Cancellations made 24+ hours before departure are fully refundable. Modifications within 24 hours may incur additional charges. Changes to international flights may have different policies. Contact our support team for specific terms.'
        },
        {
          question: 'What information do I need to provide when booking?',
          answer: 'You\'ll need to provide: passenger names (as they appear on ID), departure and arrival locations, preferred dates and times, number of passengers, special requirements (pets, wheelchair access), contact information, and payment details. For international flights, passport information is required.'
        }
      ]
    },
    {
      id: 2,
      category: 'Safety & Security',
      icon: FaShieldAlt,
      questions: [
        {
          question: 'What safety measures do you have in place?',
          answer: 'We maintain the highest safety standards with: FAA-certified aircraft and crew, regular maintenance inspections, experienced pilots with extensive training, comprehensive insurance coverage, and emergency response procedures. All our aircraft undergo rigorous safety checks before each flight.'
        },
        {
          question: 'Are your pilots licensed and experienced?',
          answer: 'All our pilots are FAA-certified with extensive experience. They undergo regular training, medical examinations, and proficiency checks. Our pilots have an average of 15+ years of experience and are trained in various weather conditions and emergency procedures.'
        },
        {
          question: 'What happens in case of bad weather?',
          answer: 'Safety is our top priority. We continuously monitor weather conditions and will reschedule flights if conditions are unsafe. Our experienced pilots are trained to handle various weather scenarios, and we have alternative routing options available. Passengers will be notified immediately of any changes.'
        }
      ]
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-one py-8 sm:py-10 relative overflow-hidden bg-gray-100">
     

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaQuestionCircle className="text-blue-600 mr-2 text-sm" />
            <span className="text-blue-700 text-sm font-medium uppercase tracking-wider">Frequently Asked Questions</span>
          </motion.div>
      
        </motion.div>

        {/* FAQ Categories */}
        <div className="max-w-6xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
            

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => (
                  <motion.div
                    key={questionIndex}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <button
                      className="w-full bg-blue-500 px-6 py-4 text-left flex items-center justify-between transition-colors duration-300"
                      onClick={() => toggleFaq(`${categoryIndex}-${questionIndex}`)}
                    >
                      <h4 className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </h4>
                      <motion.div
                        animate={{ rotate: openIndex === `${categoryIndex}-${questionIndex}` ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-white text-sm flex-shrink-0" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === `${categoryIndex}-${questionIndex}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
