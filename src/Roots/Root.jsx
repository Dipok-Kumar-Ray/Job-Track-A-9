import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <nav className=' top-0 mx-auto bg-base-100 shadow-sm'> 
            <Navbar></Navbar>
            </nav>
            <Outlet/>
           <footer>
           <Footer></Footer>
           </footer>
        </div>
    );
};

export default Root;