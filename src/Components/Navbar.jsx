import './navbar.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, NavLink } from "react-router";
import profileImg from  '../assets/user.png'


const Navbar = () => {
  const { user, logOUtUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSignOut = () => {
    logOUtUser()
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

    const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/company">Companies</NavLink>
      </li>
      <li>
        <NavLink to="/companies">Company Details</NavLink>
      </li>

      </>
  );

  return (
    <div className="w-11/12 mx-auto navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className="flex items-center font-bold">
          <span className="text-3xl text-blue-400 font-bold">Job</span>
          <span className="text-3xl text-green-400 font-bold">Track</span>
        </div>
      </div>

      <div className=" navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {links}
          <button onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <div className="flex justify-between gap-3">
                   {/* <li> */}
                <Link to="/myProfile">
                 <button className='btn btn-primary' onClick={handleSignOut}>Logout</button>
                </Link>
              {/* </li> */}
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             <NavLink to='/update'>
               <div className="w-10 rounded-full">
                <img src={user.photoURL || profileImg} alt="User Profile" />
              </div>
             </NavLink>
            </label>
          </div>
        ) : (
          <>
            <Link to="/register" className="btn btn-outline btn-sm">Register</Link>
            <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
