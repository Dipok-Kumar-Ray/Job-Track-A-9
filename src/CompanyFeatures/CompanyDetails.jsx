import React, { useEffect, useState } from 'react';


const CompanyDetails = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() =>{
    fetch('/jobs.json')
      .then(res => res.json())
      .then(data => setDetail(data))
      
  },[])


  return (
    <div>
      {
        detail.map(company => (<h2 key={company.id}>{company.name}</h2>))
      }
    </div>
  );
};

export default CompanyDetails;



// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';


// const CompanyDetails = () => {
//   const data = useLoaderData();
//   const { id } = useParams();
 

//   const company = data.find(company => company.id == id);
//   console.log(company);

//   const {name, location, industry} = company || {};

// //   if (!company) return <p className="text-center text-red-500 mt-10">Company not found!</p>;

//   return (
//     <div>
//         <h2>Company Details {name}</h2>
//         <p>{location}</p>
//         <p>{industry}</p>
//     </div>


    // <div className="max-w-5xl mx-auto p-4">
    //   {/* Company Info */}
    //   <div className="bg-white shadow-md rounded-2xl p-6 mb-8">
    //     <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    //       <img
    //         src={company.logo}
    //         alt={company.name}
    //         className="w-24 h-24 object-contain"
    //       />
    //       <div>
    //         <h2 className="text-2xl font-bold">{company.name}</h2>
    //         <p className="text-gray-600">{company.industry}</p>
    //         <p className="text-sm text-gray-500">{company.location}</p>
    //         <a
    //           href={company.website}
    //           target="_blank"
    //           rel="noreferrer"
    //           className="text-blue-500 underline text-sm"
    //         >
    //           Visit Website
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Jobs Section */}
    //   <h3 className="text-xl font-semibold mb-4">Available Jobs:</h3>
    //   <div className="space-y-6">
    //     {company.jobs.map(job => (
    //       <div key={job.id} className="bg-white border rounded-xl p-4 shadow-sm">
    //         <img
    //           src={job.bannerImage}
    //           alt={job.title}
    //           className="w-full h-48 object-cover rounded-lg mb-4"
    //         />
    //         <h4 className="text-lg font-bold">{job.title}</h4>
    //         <p className="text-gray-600 mb-2">{job.description}</p>
    //         <div className="flex flex-wrap gap-2 text-sm text-gray-500">
    //           <span>📍 {job.location}</span>
    //           <span>💼 {job.jobType}</span>
    //           <span>💰 {job.salary}</span>
    //         </div>
    //         <div className="mt-3">
    //           <h5 className="font-medium mb-1">Requirements:</h5>
    //           <ul className="list-disc list-inside text-sm text-gray-700">
    //             {job.requirements.map((req, index) => (
    //               <li key={index}>{req}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
//   );
// };

// export default CompanyDetails;
