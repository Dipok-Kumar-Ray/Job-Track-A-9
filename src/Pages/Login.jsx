import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
// import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { signInUser, googleLogin, resetPassword } = useContext(AuthContext);

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        toast.error(error.message);
      });
  };

  // email/password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Login Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code, error.message);
        toast.error("Login failed! Please check your credentials.");
      });
  };

  // reset password
  const handleForgotPassword = () => {
    const email = document.querySelector('input[name="email"]').value;
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent successfully!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong. Try again.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Login | JobsTrack</title>
      </Helmet>
      <div className="mt-8 mb-9 mx-auto card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-center text-3xl font-semibold">Login now!</h1>

          <form onSubmit={handleLogin}>
            {/* email */}
            <label className="label">Email :</label>
            <input
              type="email"
              className="input input-bordered w-full"
              name="email"
              placeholder="Enter Your Email"
              required
            />

            {/* password */}
            <label className="label">Password :</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="text-right mt-1">
              <button
                onClick={handleForgotPassword}
                type="button"
                className="link link-hover text-sm text-blue-500"
              >
                Forgot password?
              </button>
            </div>

            <button onClick={handleLogin} type="submit" className="btn btn-primary w-full mt-4">
              Login
            </button>
          </form>

          <p className="mt-2 text-center text-sm">
            New to this site?{" "}
            <Link className="text-blue-500 underline" to="/register">
              Register
            </Link>
          </p>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border mt-3 w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2"
            >
              <path fill="#4285f4" d="M...Z" />
              {/* simplified path for brevity */}
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
