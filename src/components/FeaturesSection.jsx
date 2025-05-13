import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🌱",
      title: "Choose Your Crop Guide",
      description: "Get localized sowing, irrigation, and fertilizer advice tailored for your region and season."
    },
    {
      icon: "🔧",
      title: "Rent Tools Easily",
      description: "Explore available tools near you and book them on-demand — save cost, boost productivity."
    },
    {
      icon: "📢",
      title: "Get Real-time Alerts",
      description: "Receive instant weather and pest alerts to take timely actions and protect your crops."
    }
  ];

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16"
      id='service'
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4 text-green-600"
        >
          How Krishi Saathi Helps You Grow
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          Whether you're a farmer or tool owner, we simplify agriculture through digital support.
        </motion.p>
      </motion.div>
      
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-xl bg-lime-200 transition-shadow duration-300"
          >
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="w-20 h-20 rounded-full mb-6 flex items-center justify-center text-3xl"
              style={{ 
                backgroundColor: index === 0 ? '#ECFDF5' : 
                                 index === 1 ? '#FEF9C3' : 
                                 '#FFEDD5'
              }}
            >
              {feature.icon}
            </motion.div>
            <motion.h3 
              variants={textVariant(0.3)}
              className="text-2xl font-semibold text-green-900 mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))}
              className="text-gray-500 text-center"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.7)}
        className="text-center mt-12"
      >
        <motion.button 
          variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors relative"
        >
          Join Krishi Saathi Now
          <div className="absolute -z-10 w-full h-full rounded-full bg-green-600/30 blur-xl top-0 left-0"></div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
