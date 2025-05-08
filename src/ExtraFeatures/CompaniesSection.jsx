import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

const CompaniesSection = () => {
    const companies = [
        {
          id: 1,
          name: "Google",
          logo: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
        },
        {
          id: 2,
          name: "Meta",
          logo: "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png"
        },
        {
          id: 3,
          name: "Microsoft",
          logo: "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png"
        },
        {
          id: 4,
          name: "Tesla",
          logo: "https://1000logos.net/wp-content/uploads/2021/03/Tesla-logo.png"
        }
      ];
      
  
    return (
    <div>
      <Helmet>
        <title>Companies | JobTrack</title>
      </Helmet>

      <section className="w-11/12 mx-auto rounded-2xl py-12 bg-gray-100 ">
        <h2 className="text-3xl font-bold text-center mb-8">Top Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {
          companies.map(company => (
            <Link
              key={company.id}
              to={`/company/${company.id}`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition text-center"
            >
              <img src={company.logo} alt={company.name} className="h-16 mx-auto mb-2" />
              <p className="text-gray-800 font-medium">{company.name}</p>
            </Link>
          ))
          }
        </div>
      </section>
    </div>
    );
  };
  
export default CompaniesSection;