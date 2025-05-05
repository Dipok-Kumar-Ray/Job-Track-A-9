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






const router = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index:true, Component:HomeLayout},
      {
        path:'/home',
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
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
    <RouterProvider router={router} />
   </HelmetProvider>
  </StrictMode>,
)
