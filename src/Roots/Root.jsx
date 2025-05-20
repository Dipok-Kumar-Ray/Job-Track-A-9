import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Animation from '../Components/Animation';

const Root = () => {
    return (
        <div>
            <Navbar/>
            {/* {import.meta.env.VITE_name} */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;