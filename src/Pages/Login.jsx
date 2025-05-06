import React, { useContext, useState} from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const  navigate = useNavigate()

  const {signInUser, googleLogin, resetPassword} = useContext(AuthContext);
  
  

  //google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("User Login Successfully")
        toast.success("User Login Successfully")
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage)
      });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //login user with email and password
    signInUser(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        alert("User Login Successfully")
        toast.success("User Login Successfully")
        navigate('/');
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage)
        // toast.warm('User Already Exist') ;
      });



  // if(!email){
  //   toast.error("Please enter your email address")
  //     return;
  // }
  // resetPassword(email)
  // .then(()=> {
  //   toast.success("Password reset email sent successfully !!!")

  // })
  // .catch((error) => {
  //   console.log(error.message);
  //   toast.error("something went wrong . Try again.")
  // })

  };

  //reset/forgot password
  const handleForgotPassword = e => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    // const email = e.target.email.value;
    console.log(email);
    if(!email){
      toast.error("Please enter your email address")
      return;
    }
    resetPassword(email)
    .then(()=> {
      toast.success("Password reset email sent successfully !!!")

    })
    .catch((error) => {
      console.log(error.message);
      toast.error("something went wrong . Try again.")
    })
  }


  return (
    <div>
      <Helmet>
        <title>Login | JobsTrack</title>
      </Helmet>
      <div className=" mt-8 mb-9 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center text-3xl font-semi-bold ">Login now !</h1>
          <form onSubmit={handleLogin} className="fieldset">
            {/* email */}
            <label className="label">Email : </label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Enter Your Email"
            />
            {/* password */}
            <label className="label">Password : </label>
            <div className="relative">
             <input
               type={showPassword ? "text" : "password"}
               name="password"
               className="input"
               placeholder="Password"
               required
             />
            <button
               onClick={() => {
                 setShowPassword(!showPassword);
               }}
              //  type="button"
              
               className="btn btn-xs absolute top-2 right-8"
             >
               {showPassword ? <FaEyeSlash /> : <FaEye />}
             </button>
            </div>
            <div>
              {/* forgot password */}
              <button onClick={handleForgotPassword} type="button" className="link link-hover">Forgot password?</button>
            </div>
            <button type="Submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <p className="mt-2 text-center">
            New to this site? Please 
            <Link className="text-blue-500 underline" to="/register">
              Rigister
            </Link>
          </p>
          {/* Google Log In */}
          <button onClick={handleGoogleLogin}
            
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
