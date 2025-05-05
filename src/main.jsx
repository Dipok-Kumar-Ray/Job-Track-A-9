import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Roots/Root.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import HomeLayout from './Pages/HomeLayout.jsx'
import About from './Pages/About.jsx'
import Home from './Components/Home.jsx'
import Companies from './Components/Companies.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import { ToastContainer } from 'react-toastify'






const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index:true, Component:HomeLayout},
      {
        path:'/',
        Component: Home,
      },
      {
        path:'/companies',
        Component: Companies
      },
      {
        path:'/about',
        Component: About
      },
      {
        path:'*',
        Component: ErrorPage,
      },
      {
        path:'/login',
        Component: Login,
      },
      {
        path:'/register',
        Component: Register,
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
    <RouterProvider router={router} />
    <ToastContainer autoClose={3000} />
   </HelmetProvider>
  </StrictMode>,
)
