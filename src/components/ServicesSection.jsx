import React from 'react';
import { GiFarmTractor, GiGrain, GiFertilizerBag, GiWaterTank } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const KrishiServicesSection = () => {
  const services = [
    {
      icon: <GiFarmTractor className="w-8 h-8 text-green-600" />,
      title: "Tool Rental",
      description: "Easily rent farming equipment from nearby tool owners with transparent pricing.",
      link: "#tool-rental"
    },
    {
      icon: <GiGrain className="w-8 h-8 text-yellow-600" />,
      title: "Crop Advisory",
      description: "Get crop lifecycle tips, from sowing to harvesting, tailored to your region.",
      link: "#crop-advisory"
    },
    {
      icon: <GiFertilizerBag className="w-8 h-8 text-orange-500" />,
      title: "Fertilizer Guide",
      description: "Know the right type and quantity of fertilizers at each growth stage.",
      link: "#fertilizer-guide"
    },
    {
      icon: <GiWaterTank className="w-8 h-8 text-blue-500" />,
      title: "Water Usage Reports",
      description: "Track water usage for your farm and get water-saving alerts.",
      link: "#water-usage"
    }
  ];

  return (
    <section id="krishi-services" className="bg-lime-200 py-20 mb-4 container mx-auto rounded-2xl px-4 sm:px-6 lg:px-8">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
      >
        {/* Left Content */}
        <motion.div 
          variants={fadeIn('right', 0.4)}
          className="md:w-1/3"
        >
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5 text-green-800"
          >
            Empowering Farmers With Smart Tools
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.5)}
            className="text-gray-700 text-lg mb-4 md:w-4/5"
          >
            Krishi Saathi helps farmers access modern services, reduce costs, and improve productivity.
          </motion.p>
          <motion.ul 
            variants={fadeIn('up', 0.6)}
            className="space-y-3"
          >
            <li className="flex items-center gap-2 text-gray-600">
              ✅ Local Language Support
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              ✅ Voice & Weather-Based Alerts
            </li>
          </motion.ul>
          <motion.button 
            variants={fadeIn('up', 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-green-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-green-700 transition-colors"
          >
            Join Krishi Saathi
          </motion.button>
        </motion.div>

        {/* Right Services Grid */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="text-green-600 font-medium hover:text-green-700 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default KrishiServicesSection;
