import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router'; 
import Root from './Roots/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

import About from './Pages/About.jsx';
import Home from './Components/Home.jsx';

import { HelmetProvider } from 'react-helmet-async';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import { ToastContainer } from 'react-toastify';
import { StrictMode } from 'react';
import AuthProvider from './Contexts/AuthProvider.jsx';
import CompanyDetails from './CompanyFeatures/CompanyDetails.jsx';
import JobsCard from './CompanyFeatures/JobsCard.jsx';





const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children: [
      { 
        index: true,
         Component: Home, 
        
        },

        {
         path: '/companies',
         loader: () => fetch('/jobs.json'),                  
         Component: CompanyDetails,
         },

      { path: '/about', Component: About },
      { path: '/login', Component: Login },
      { path: '/register', Component: Register },
      { path: '*', Component: ErrorPage },
      {
        path:'/jobcard/:id',
        Component:JobsCard,
        loader: () => fetch('/jobs.json'),
        hydrateFallbackElement: <span className="loading loading-bars loading-lg"></span>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider> 
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
