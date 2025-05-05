import React from 'react';
import { NavLink } from 'react-router';
import navIcons from "../assets/navIcon.jpg"
import profileImg from "../assets/user.png"


const Navbar = () => {
    const links = 
    <>
       <li><NavLink to='/home'>Home</NavLink></li>
       <li><NavLink to='/companies'>Companies</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
   </>

    return (
     <div className='navbar bg-base-100 w-11/12 mx-auto'>

<div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
         <div className='flex items-center gap-2'>  
          <h2 className='text-3xl'><span className='text-blue-500 font-bold'>Jobs</span><span className='text-green-400 font-bold'>Track</span></h2>
          <img className='h-8 w-14 rounded-md' src={navIcons} alt="" />
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end  lg:flex gap-3">
         <img src={profileImg} alt="" />
         <button className='btn btn-primary '>Login</button>
        </div>
      </div>

     </div>
    );
};

export default Navbar;