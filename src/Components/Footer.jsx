import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router"; 

const Footer = () => {
  return (
   <div>
    <Helmet>
      <title> Footer | JobTrack</title>
    </Helmet>
    <div className="text-center bg-gray-300 py-6">
      <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold mb-4">
        <NavLink to="/" className="link link-hover">
          Home
        </NavLink>
        <NavLink to="/companies" className="link link-hover">
          Companies
        </NavLink>
        <NavLink to="/about" className="link link-hover">
          About
        </NavLink>
        <NavLink to="/*" className="link link-hover">
          Privacy Policy
        </NavLink>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} JobsTrack. All rights reserved.</p>
    </div>
   </div>
  );
};

export default Footer;
