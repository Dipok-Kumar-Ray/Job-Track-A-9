import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Roots/Root.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import About from "./Pages/About.jsx";
import Home from "./Components/Home.jsx";
import { HelmetProvider } from "react-helmet-async";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import { ToastContainer } from "react-toastify";
import { StrictMode } from "react";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import CompanyDetails from "./CompanyFeatures/CompanyDetails.jsx";
import JobsCard from "./CompanyFeatures/JobsCard.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import MyProfile from "./Pages/MyProfile.jsx";
import UpdateProfile from "./Pages/UpdateProfile.jsx";
import CompanyInformations from "./CompanyFeatures/CompanyInformations.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-lg"></span>
        ),
        element: <Home></Home>,
      },

      {
        path: "/companies",
        loader: () => fetch("/jobs.json"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-lg"></span>
        ),

        element: <CompanyDetails></CompanyDetails>,
      },
      {
        path: 'company',
        Component: CompanyInformations
      },
      {
        path: "/jobcard/:id",
        element: (
          <PrivateRoute>
            <JobsCard />
          </PrivateRoute>
        ),
        loader: () => fetch("/jobs.json"),
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-lg"></span>
        ),
      },

      {
        path: "/login",
        element: <Login />,
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-lg"></span>
        ),
      },
      {
        path: "/register",
        Component: Register,
        hydrateFallbackElement: (
          <span className="loading loading-bars loading-lg"></span>
        ),
      },
      
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "update",
        Component: UpdateProfile,
      },
      {
        path: "/about",

        element: <About></About>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />

        <ToastContainer />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
