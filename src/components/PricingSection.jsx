import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import toolImage from '../assets/tractor.png'; // replace with actual tool image path
import farmerImg from '../assets/Farmer.png';

const ToolPricingSection = () => {
  const [toolCount, setToolCount] = useState(1);

  const ownerPlanPrice = Math.round(15000 * (toolCount / 10));
  const farmerPlanPrice = Math.round(8000 * (toolCount / 10));

  return (
    <motion.section
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Sajhedaari – Rent or List Tools
        </motion.h2>

        {/* Plan Cards */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Tool Owner */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <img
              src={toolImage}
              alt="Tool Preview"
              className="w-full h-48 object-contain mb-4"
            />
            <motion.h3 className="text-xl font-semibold text-gray-700 mb-2">
              Tool Owner Plan
            </motion.h3>
            <motion.p className="text-2xl font-bold text-emerald-600 mb-4">
              ₹{ownerPlanPrice}/day
            </motion.p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>List up to {toolCount} tools</li>
              <li>Get verified bookings</li>
              <li>Track tool usage</li>
              <li>Direct earnings to bank</li>
            </ul>
          </motion.div>

          {/* Farmer Access */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <img
              src={farmerImg}
              alt="Tool Access"
              className="w-full h-48 object-contain mb-4"
            />
            <motion.h3 className="text-xl font-semibold text-gray-700 mb-2">
              Farmer Access Plan
            </motion.h3>
            <motion.p className="text-2xl font-bold text-emerald-600 mb-4">
              ₹{farmerPlanPrice}/day
            </motion.p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
              <li>Access nearby tools</li>
              <li>Pay per use or monthly</li>
              <li>View tool ratings & reviews</li>
              <li>Rental reminders via SMS</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Tool Count Slider */}
        <motion.div variants={fadeIn('up', 0.7)} className="max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-2">
            Tools you want to list or rent: {toolCount}
          </p>
          <div className="flex items-center gap-2 mb-12">
            <span className="text-sm text-gray-500">1</span>
            <input
              type="range"
              min="1"
              max="8"
              value={toolCount}
              onChange={(e) => setToolCount(parseInt(e.target.value))}
              className="flex-1 w-56 h-2 ml- bg-emerald-200 rounded-lg cursor-pointer"
            />
            <span className="text-sm text-gray-500">8</span>
          </div>
        </motion.div>

        {/* Rental History Section */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-navy-900">
            Rental History
          </h3>
          <div className="space-y-4">
            {/* Mock rental item */}
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium text-gray-700">Rotavator</p>
                <p className="text-sm text-gray-500">Rented on: Apr 21, 2025</p>
              </div>
              <p className="text-sm text-emerald-600 font-semibold">
                Completed
              </p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium text-gray-700">Seed Drill Machine</p>
                <p className="text-sm text-gray-500">Rented on: Mar 15, 2025</p>
              </div>
              <p className="text-sm text-yellow-500 font-semibold">Pending</p>
            </div>
            {/* Add more rental history dynamically later */}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeIn('up', 0.9)} className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-4">
            Ready to join Krishi Saathi Sajhedaari?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ToolPricingSection;
