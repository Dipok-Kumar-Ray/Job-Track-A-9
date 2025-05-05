import React from 'react';
import Hero from '../assets/Hero.jpg';

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-100 px-4 lg:px-16 py-10 gap-8">
      
      {/* Text Section */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-500">Jobs</span><span className="text-green-500">Track</span>
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Your one-stop solution for job tracking and management.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src={Hero}
          alt="Hero"
          className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
