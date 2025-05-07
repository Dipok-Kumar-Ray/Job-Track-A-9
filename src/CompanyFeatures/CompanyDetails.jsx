import React, { useEffect, useState } from "react";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto">
        {detail.map((company) => (
          <div
            key={company.id}
            className=" bg-slate-200 rounded-3xl py-5 text-center shadow-lg "
          >
            <div className="flex justify-around">
              <img
                src={company.logo}
                alt=""
                className="w-24 h-24 object-cover my-2 rounded"
              />

              <div>
                <h2 className="text-xl font-semibold">{company.name}</h2>
                <p className="text-gray-600">Location: {company.location}</p>
                <p className="text-blue-600 underline">
                  {" "}
                  Website: {company.website}
                </p>
                <p className="text-gray-600 mb-2">
                  Industry: {company.industry}
                </p>
              </div>
            </div>
            <button className="btn btn-primary text-white px-4 py-1 rounded hover:bg-gray-800 transition">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;

// import React, { useEffect, useState } from 'react';

// const CompanyDetails = () => {
//   const [detail, setDetail] = useState([]);

//   useEffect(() =>{
//     fetch('/jobs.json')
//       .then(res => res.json())
//       .then(data => setDetail(data))

//   },[])

//   //  if (!company) return <p className="text-center text-red-500 mt-10">Company not found!</p>;

//   return (

//     <div>

// {
//     detail.map(company => (
//     <div  key={company.id}>
//     <div className='grid grid-cols-2 border bg-amber-300'>
//       <h1 className="text-2xl font-bold">{company.name}</h1>
//       <span>{company.logo}</span>
//       <p className="text-gray-600">{company.location}</p>
//       <p>{company.website}</p>
//       <p className="text-gray-600 mb-4">{company.industry}</p>
//       <button>View Details</button>
//     </div>

//      </div>))
//       }
//       </div>

//     );
//     }

// export default CompanyDetails;
