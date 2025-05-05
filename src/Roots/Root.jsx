import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <nav  > 
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