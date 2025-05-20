import React from 'react';
import Hero from './Hero';
import CompanyDetails from '../CompanyFeatures/CompanyDetails';
import CompaniesSection from '../ExtraFeatures/CompaniesSection';
import FeaturedJobsSection from '../ExtraFeatures/FeaturedJobsSection';
import CareerTipsSection from '../ExtraFeatures/CareerTipsSection';
import Animation from './Animation';
// import JobCard from '../CompanyFeatures/JobsCard';

const Home = () => {
  return (
    <div>
      {/* <Hero/> */}
      {/* <JobCard/> */}
      <Animation/>
      <CompanyDetails/>
      <CompaniesSection/>
      <CareerTipsSection/>
      <FeaturedJobsSection/>
    </div>
  );
};

export default Home;