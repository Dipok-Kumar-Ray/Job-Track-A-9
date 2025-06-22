import CompanyDetails from '../CompanyFeatures/CompanyDetails';
import CompaniesSection from '../ExtraFeatures/CompaniesSection';
import FeaturedJobsSection from '../ExtraFeatures/FeaturedJobsSection';
import CareerTipsSection from '../ExtraFeatures/CareerTipsSection';
import Animation from './Animation';


const Home = () => {
  return (
    <div>
      <Animation/>
      <CompanyDetails/>
      <CompaniesSection/>
      <CareerTipsSection/>
      <FeaturedJobsSection/>
    </div>
  );
};

export default Home;