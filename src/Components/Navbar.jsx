import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import navIcons from "../assets/navIcon.jpg"
import profileImg from "../assets/user.png"
import { Helmet } from 'react-helmet';
import  './Navbar.css'
import { AuthContext } from '../Contexts/AuthContext';



const Navbar = () => {

  const {user, logOUtUser} = useContext(AuthContext);
  // console.log('userInfo', user);
  // console.log('Navbar render User', user);


  const handleLogOut = () => {
    logOUtUser()
    .then(() => {
      console.log('user logged out successfully');
    })
    .catch((error) => {
      console.error('Error logging out:', error);
    });
  }

    const links = 
    <>
       <li><NavLink to='/'>Home</NavLink></li>
       <li><NavLink to='/companies'>Companies</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
   </>

    return (

 <div>
<Helmet>
  <title> Navbar | JobsTrack</title>
</Helmet>
<div className='navbar bg-base-100 w-11/12 mx-auto'>

<div className="navbar bg-base-100 ">
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
          <h2 className='text-3xl'><span className='text-blue-500 font-bold'>Job</span><span className='text-green-400 font-bold'>Track</span></h2>
          <img className='h-8 w-14 rounded-md' src={navIcons} alt="" />
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end  lg:flex gap-3">

          {
            
            user ? (

              <div className='flex gap-2 items-center '>

                <img className='h-12 w-12 rounded-full border' src={`${user ? user.photoURL : profileImg}`} alt="" />

            <button className='btn btn-accent' onClick={handleLogOut}>Log Out</button>
              </div>

              )  :
            (
          <div className='flex gap-3'>
             <Link to='/login' className='btn btn-primary '>Login </Link>
          </div>
           ) 
         
          }

        </div>
      </div>

     </div>

 </div>
    );
};

export default Navbar;