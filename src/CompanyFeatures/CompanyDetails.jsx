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
            className="bg-amber-50 shadow-2xl rounded-xl py-5 text-center bg-gradient-to-bl "
          >
            <div className=" not-only:flex justify-around py-5 items-center">
              <img 
                src={company.logo}
                alt=""
                className="w-34 h-34 lg:h-24 lg:w-24  object-cover my-2 rounded-full"
              />

              <div className="text-left ml-4 lh-20">
                <h2 className="text-3xl text-blue-500 lg:text-xl mb-4 font-semibold lg:p-3">{company.name}</h2>

              </div>
            </div>
         <Link to={`/jobcard/${company.id}` }state={{company}}>
         <button  className="w-  btn bg-amber-300 mt-7 text-white px-4 py-1 rounded hover:bg-gray-800 transition">View Details</button>
         </Link>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default CompanyDetails;

