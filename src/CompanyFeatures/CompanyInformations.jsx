import React, { useEffect, useState } from "react";

const CompanyInformations = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);

  return (
    <div className="my-15">
      <h1 className="text-2xl font-bold mb-4 text-center">All Company</h1>

      {/* Grid Container */}
      {detail && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-11 w-11/12 mx-auto py-6">
          {detail.map((company) => (
            <div
              key={company.id}
              className="bg-amber-50 shadow-2xl rounded-xl py-5 text-center bg-gradient-to-bl"
            >
              <div className="flex justify-center py-5 items-center">
                {/* logo link */}
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="flex justify-center items-center w-34 h-34 lg:h-24 lg:w-24 object-cover my-2 rounded-full hover:scale-105 transition duration-300"
                  />
                </a>

                <div className="text-left ml-4 lh-20">
                  {/* name link */}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-500 lg:text-xl mb-4 font-semibold lg:p-3 hover:underline"
                  >
                    {company.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyInformations;
