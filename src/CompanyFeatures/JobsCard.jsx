// import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import devTable from '../assets/developer.jpg'
import { Helmet } from 'react-helmet';

const JobsCard = () => {
  const data = useLoaderData();
  const { id } = useParams();

  // const [apply, setApply] = useState(false);

  const categoriesID = data.filter(d => d.id === id);
  

  if (!categoriesID || categoriesID.length === 0) {
    return <div> No Company Card Found.  </div>;
  }

  return (
<div>
  <Helmet>
    <title>JobCard | JobTrack</title>
  </Helmet>

  <div>
      {
        categoriesID.map(company => (
          <div className='w-11/12 mx-auto mt-9 ' key={company.id}>
            {
             
              company.jobs.map(job => (
                <div key={job.id} className="card w-full bg-base-100 shadow-xl  rounded-xl p-11 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-md" />
                    <div>
                      <h2 className="font-semibold">{company.name}</h2>
                      <p className="text-sm text-gray-500">{company.location}</p>
                    </div>
                  </div>

                  <Link to={company.website} target="_blank" rel="noreferrer" className="text-blue-500 underline text-sm mb-3 inline-block">
                    Visit Website
                  </Link>

                  <figure className="mb-4">
                    <img src={devTable} alt="Job banner" className="w-200 h-100 object-cover rounded-xl" />
                  </figure>

                  <div className="mb-2">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.location} · {job.jobType}</p>
                    <p className="text-green-600 font-semibold mt-1">{job.salary}</p>
                  </div>

                  <p className="text-sm text-gray-700 mb-2">{job.description}</p>

                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              ))

            }
           
          </div>
        ))
      }
    </div>
</div>
  );
};

export default JobsCard;




