import React from 'react';
import Hero from './Hero';
import CompanyDetails from '../CompanyFeatures/CompanyDetails';
// import JobCard from '../CompanyFeatures/JobsCard';

const Home = () => {
  return (
    <div>
      <Hero/>
      {/* <JobCard/> */}
      <CompanyDetails/>
    </div>
  );
};

export default Home;