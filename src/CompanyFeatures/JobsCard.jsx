import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Briefcase } from 'lucide-react';
import { MapPin } from 'lucide-react';
import Clock from 'react-clock';
import { ExternalLink } from 'react-external-link';
import devTable from '../assets/developer.jpg'


const JobsCard = () => {
  const [applied, setApplied] = useState(false);
  const [value, setValue] = useState(new Date());

  const data = useLoaderData();
 const {id} = useParams();
 console.log(id);

 const developer = data.filter(d => d.id === id);

  return (
    <div className='w-7/12 mx-auto'>

      {
        developer.map(user => (<div key={user.id}>
          {/* <h2>{user.name}</h2> */}

          <div className="max-w-md rounded-lg shadow-lg bg-white overflow-hidden">
      {/* Header */}
      <div className="p-4 flex items-center gap-4">
        <div className="bg-green-100 p-3 rounded-lg">
          <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center">
            <Briefcase className="text-white" size={20} />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <div className="flex items-center text-gray-600">
            < MapPin  size={16} className="mr-1" />
            <span>{user.location}</span>
          </div>
        </div>
      </div>
      
      {/* Image */}
      <div className="w-full h-48 bg-gray-800 relative">
        <img 
          src={devTable} 
          alt="Developer workspace with code on screen" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      {/* Job Details */}
      <div className="p-4">
        <h3 className="text-2xl font-bold">{user.jobs[0]?.title}</h3>
        <div className="flex items-center gap-3 text-gray-600">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            <span>{user.jobs[0]?.location}</span>
          </div>
          <span>#</span>
          <div className="flex items-center">
          <p>Current time:</p>
          <Clock value={value} />
          </div>
        </div>
        
        <div className="text-xl font-semibold text-green-600 mb-3"> Salary :  
        {user.jobs[0]?.salary}
        </div>
        
        <p className="text-gray-700 mb-4">
        {user.jobs[0]?.description}
        </p>
        
        {/* Skills */}
        <div className="mb-4">
          <ul className="space-y-2">
          {user.jobs[0]?.requirements}
          </ul>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 mt-4">
          <a 
            href="#" 
            className="flex items-center justify-center gap-2 text-blue-600 border border-blue-600 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors"
          >
            <ExternalLink size={18} />
            Visit Website
          </a>
          <button 
            onClick={() => setApplied(!applied)} 
            className={`flex-1 px-4 py-2 rounded-lg text-white transition-colors ${applied ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {applied ? 'Applied' : 'Apply Now'}
          </button>
        </div>
      </div>
    </div>


        </div>) )
      }
      
    </div>
  );
};

export default JobsCard;