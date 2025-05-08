import { Helmet } from "react-helmet";
import { Link } from "react-router";

const FeaturedJobsSection = () => {
    const jobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "Dhaka, Bangladesh",
        experience: "2+ years"
      },
      {
        id: 2,
        title: "Backend Developer",
        company: "Meta",
        location: "Remote",
        experience: "3+ years"
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "Tesla",
        location: "California, USA",
        experience: "1+ years"
      }
    ];
  
    return (
      <div>
        <Helmet>
          <title>FeaturedJob | JobTrack</title>
        </Helmet>
        <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8"> Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {jobs.map(job => (
            <div key={job.id} className="p-6 rounded-lg shadow bg-gray-50 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company} # {job.location}</p>
              <p className="mt-2 text-gray-500">Experience: {job.experience}</p>
              <Link to={`/job/${job.id}`} className="text-blue-600 mt-3 inline-block">View Details </Link>
            </div>
          ))}
        </div>
      </section>
      </div>
    );
  };
  
  export default FeaturedJobsSection;
  