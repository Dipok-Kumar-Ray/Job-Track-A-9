import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const JobsCard = () => {
  const data = useLoaderData();
 const {id} = useParams();
 console.log(id);

 const developer = data.filter(d => d.id === id);

  return (
    <div>

      {
        developer.map(user => (<div key={user.id}>
          <h2>{user.name}</h2>
        </div>) )
      }
      
    </div>
  );
};

export default JobsCard;