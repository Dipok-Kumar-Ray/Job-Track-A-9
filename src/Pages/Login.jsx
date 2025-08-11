import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
        toast.error(error.message || "Google login failed");
      });
  };

  // email/password login
  const handleLogin = (e) => {
    e.preventDefault();

    // safer way to access values
    const form = e.target;
    const email = form.email?.value || "";
    const password = form.password?.value || "";

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

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

  // reset password input fields
  const handleForgotPassword = () => {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput ? emailInput.value : "";

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
        toast.error(error.message || "Something went wrong. Try again.");
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

            <button type="submit" className="btn btn-primary w-full mt-4">
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
            className="btn bg-white text-black border mt-3 w-full flex items-center justify-center"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2"
            >
              <path
                fill="#4285f4"
                d="M488 261.8c0-17.4-1.6-34.1-4.8-50.4H256v95.5h135.7c-5.8 31.1-23.4 57.5-50 75.3v62.3h80.8c47.3-43.6 74.5-107.7 74.5-182.7z"
              />
              <path
                fill="#34a853"
                d="M256 492c67.7 0 124.7-22.5 166.3-61l-80.8-62.3c-22.5 15-51.4 23.7-85.5 23.7-65.8 0-121.5-44.5-141.4-104.5H31v65.7C72.4 444.4 157 492 256 492z"
              />
              <path
                fill="#fbbc04"
                d="M114.6 293.9c-4.9-14.5-7.7-30-7.7-45.9s2.8-31.4 7.7-45.9V136.4H31c-15.4 29.9-24.2 63.4-24.2 100.1s8.8 70.2 24.2 100.1l83.6-42.7z"
              />
              <path
                fill="#ea4335"
                d="M256 101.5c35.1 0 66.7 12 91.5 35.7l68.5-68.5C376.1 29 319.1 7 256 7 157 7 72.4 54.6 31 136.4l83.6 65.6c20-60 75.6-104.5 141.4-104.5z"
              />
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
