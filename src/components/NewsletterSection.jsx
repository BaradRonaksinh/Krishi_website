import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="px-4 md:px-10 lg:px-20 py-20 bg-green-50">
      <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="bg-green-600 rounded-3xl overflow-hidden shadow-lg relative"
      >
        <div className="relative z-10 px-6 md:px-16 py-16 md:py-24">
          
          {/* Background Shape */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="absolute top-0 right-0 w-1/2 h-full bg-green-700 clip-path-slant hidden md:block"
          ></motion.div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-14">
            
            {/* Left Text */}
            <motion.div 
              variants={fadeIn('right', 0.5)}
              className="text-white max-w-xl text-center md:text-left"
            >
              <motion.h2 
                variants={textVariant(0.3)}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5"
              >
                खेती से जुड़े अपडेट्स पाएं!
              </motion.h2>
              <motion.p 
                variants={fadeIn('up', 0.6)}
                className="text-green-100 text-base sm:text-lg"
              >
                मौसम, फ़सल सलाह, उपकरण रेंटिंग और पानी की जानकारी – सब एक जगह! Krishi Saathi न्यूज़लेटर से जुड़ें।
              </motion.p>
            </motion.div>

            {/* Right Email Input */}
            <motion.div 
              variants={fadeIn('left', 0.5)}
              className="w-full md:w-auto"
            >
              <motion.div 
                variants={fadeIn('up', 0.6)}
                className="flex flex-col sm:flex-row gap-4 sm:gap-0"
              >
                <motion.input
                  variants={fadeIn('right', 0.7)}
                  type="email"
                  placeholder="अपना ईमेल डालें"
                  className="w-full sm:w-auto md:w-80 px-5 sm:px-6 py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-sm sm:text-base"
                />
                <motion.button 
                  variants={fadeIn('left', 0.7)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-yellow-400 text-green-900 font-semibold px-6 sm:px-8 py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
                >
                  <span>जुड़ें</span>
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Custom Shape */}
      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  )
}

export default NewsletterSection;
