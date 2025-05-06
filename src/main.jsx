import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router'; // ✅ ঠিক করলাম: 'react-router' → 'react-router-dom'
import Root from './Roots/Root.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import HomeLayout from './Pages/HomeLayout.jsx';
import About from './Pages/About.jsx';
import Home from './Components/Home.jsx';
import Companies from './Components/Companies.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import { ToastContainer } from 'react-toastify';
import { StrictMode } from 'react';
import AuthProvider from './Contexts/AuthProvider.jsx'; // ✅ Add this

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomeLayout },
      { path: '/', Component: Home },
      { path: '/companies', Component: Companies },
      { path: '/about', Component: About },
      { path: '/login', Component: Login },
      { path: '/register', Component: Register },
      { path: '*', Component: ErrorPage },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider> {/* ✅ Now context is available everywhere */}
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
