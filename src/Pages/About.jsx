import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
            <div>
               <Helmet>
               <title>About | JobsTrack</title>
               </Helmet>
            </div>
            <h2 className='text-3xl text-center mt-9'>About Us</h2>
            <p className='text-center mt-5'>Welcome to JobsTrack, your ultimate destination for job seekers and employers alike. Our platform is designed to connect talented individuals with exciting career opportunities while providing companies with the tools they need to find the perfect candidates.</p>
            <p className='text-center mt-5'>At JobsTrack, we understand that the job market is constantly evolving, and we strive to stay ahead of the curve. Our user-friendly interface and advanced search features make it easy for job seekers to find their dream jobs and for employers to discover top talent.</p>  
        </div>
    );
};

export default About;