import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData = [
  {
    title: 'Stay Organized and Confident',
    description: 'Keep deadlines, interviews, and follow-ups at your fingertips. Never miss an opportunity!',
    image: 'https://i.postimg.cc/7Zyjgmgq/istockphoto-1513818710-612x612.jpg',
  },
  {
    title: 'Your Career Journey, Simplified',
    description: 'From application to offer — JobTrack is your companion in landing your dream job.',
    image: 'https://i.postimg.cc/RFqYM8zL/istockphoto-1147195672-612x612.jpg',
  },
  {
    title: 'Streamline Your Job Applications',
    description: 'Manage and track all your job applications in one place with JobTrack’s powerful tools.',
    image: 'https://i.postimg.cc/tRwKgXJZ/career-employment-occupation-recruitment-work-concept-53876-128104.avif',
  },
];

const Animation = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-11/12 mt-10 mx-auto min-h-[400px] bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Text (Always Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1 flex-1 text-center md:text-left"
            >
              <h1 className=" text-center text-3xl md:text-5xl font-bold text-blue-600 mb-4">{slide.title}</h1>
              <p className=" text-center text-base md:text-lg text-gray-700 mb-6">{slide.description}</p>
                 </motion.div>

            {/* Image (Always Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 flex-1 flex justify-around"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="max-h-72 md:max-h-80 object-contain"
              />
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Animation;
