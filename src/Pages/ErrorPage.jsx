import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
       <div>
        <Helmet>
            <title>ErrorPage | JobTrack</title>
        </Helmet>
        <div>
            <title>ErrorPage | JobsTrack</title>
            <div className='p-9 mt-16 mb-19 flex flex-col justify-center items-center  bg-gray-100'>
            <div className='text-red-500 text-5xl text-center mb-5'>404 Not Found</div>
           
            <p className="text-red-600 text-lg font-semibold">⚠️ Error: Something went wrong. Please try again later.</p>
           <Link to='/'  className='btn btn-primary mt-5'>Back to home page</Link>
        </div>
        </div>
       </div>
    );
};

export default ErrorPage;