import React from "react";
import { NavLink } from "react-router"; // এটি ঠিক করো: 'react-router' → 'react-router-dom'

const Footer = () => {
  return (
    <div className="text-center bg-gray-300 py-6">
      <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold mb-4">
        <NavLink to="/home" className="link link-hover">
          Home
        </NavLink>
        <NavLink to="/companies" className="link link-hover">
          Companies
        </NavLink>
        <NavLink to="/about" className="link link-hover">
          About
        </NavLink>
        <NavLink to="/privacy" className="link link-hover">
          Privacy Policy
        </NavLink>
      </div>
      <p className="text-sm">© {new Date().getFullYear()} JobsTrack. All rights reserved.</p>
    </div>
  );
};

export default Footer;
