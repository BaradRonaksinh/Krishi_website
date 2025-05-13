import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import leadyImg from "../assets/leady_farmer.jpeg"
import men_farmer from "../assets/men_2.jpg"
import men_farmer_2 from "../assets/men_3.jpg"
import leady from '../assets/leady_farmer_2.jpeg'
import men_3 from '../assets/df.jpeg'
import ledy_4 from '../assets/gh.jpeg'

const testimonials = [
  {
    id: 1,
    name: "Ramesh Patel", 
    image: men_farmer,
    text: "Krishi Saathi helped me rent a tractor during peak season. It's easy to use and saved me a lot of time and effort.",
  },
  {
    id: 2,
    name: "Sita Verma",
    image: leadyImg,
    text: "I follow the crop lifecycle guide in my native language. It gives timely tips about fertilizer and harvesting.",
  },
  {
    id: 3,
    name: "Karan Chaudhary",
    image: men_farmer_2,
    text: "Thanks to the weather-based alerts from Krishi Saathi, I saved my crops from heavy rain damage this year.",
  },
  {
    id: 4,
    name: "Lalita Devi",
    image: leady,
    text: "As a tool owner, I now rent out my thresher using the app. It's a great source of extra income in my village.",
  },
  {
    id: 5,
    name: "Manoj Singh",
    image: men_3,
    text: "The water usage report is very helpful. It guides me to irrigate efficiently and reduce wastage.",
  },
  {
    id: 6,
    name: "Poonam Sharma",
    image: ledy_4,
    text: "My favorite part is voice guidance in Hindi. Even older family members can understand and use it easily.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4 text-green-800"
        >
          What Farmers Say About Krishi Saathi
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-700"
        >
          Real feedback from the people Krishi Saathi was built for.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-6 rounded-2xl shadow-md h-full flex flex-col"
              >
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full border-4 border-green-500"
                  />
                </div>
                <div className="flex justify-center mb-2 text-yellow-500">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <h3 className="font-semibold text-xl mb-2 text-green-700">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {testimonial.text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
