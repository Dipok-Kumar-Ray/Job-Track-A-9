
import { motion } from 'framer-motion';


const Animation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center p-6">
      {/* Animated Title */}
      <motion.h1
        className="text-5xl font-bold text-blue-600 mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to JobTrack!
      </motion.h1>

      {/* Subtitle with delay */}
      <motion.p
        className="text-lg text-gray-700 mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Track your job applications easily and stay organized with our smart platform.
      </motion.p>

      {/* Animated Call to Action Button */}
      <motion.button
        className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Animation;
