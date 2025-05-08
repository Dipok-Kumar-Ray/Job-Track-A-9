import React, { useEffect, useState } from "react";
import { Link } from "react-router";


const CompanyDetails = () => {
   const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div className="my-15">
      <h1 className="text-2xl font-bold mb-4 text-center">We Are  Hiring</h1>

      {/* Grid Container */}
    { detail && <div className="grid grid-cols-1 md:grid-cols-4 gap-11 w-11/12 mx-auto py-6">
        {
        detail.map((company) => (
          <div
            key={company.id}  
            className=" bg-slate-200 rounded-xl py-5 text-center shadow-lg "
          >
            <div className="flex justify-around py-5 items-center">
              <img 
                src={company.logo}
                alt=""
                className="w-24 h-24 object-cover my-2 rounded-full"
              />

              <div className="text-left ml-4 lh-20">
                <h2 className="text-3xl lg:text-xl mb-4 font-semibold lg:p-3">{company.name}</h2>
                
                {/* <h3 className="text-2xl mb-2">{company.jobs[0].title}</h3>
                <p> Salary: {company.jobs[0].salary}</p>
                <p>JobType: {company.jobs[0].jobType}</p>               
                <p> Location: {company.jobs[0].location}</p>             
                <p className="text-gray-600 mb-2">
                  Industry: {company.industry}
                </p> */}

              </div>
            </div>
         <Link to={`/jobcard/${company.id}` }state={{company}}>
         <button  className="w-full  btn btn-primary mt-7 text-white px-4 py-1 rounded hover:bg-gray-800 transition">View Details</button>
         </Link>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default CompanyDetails;

