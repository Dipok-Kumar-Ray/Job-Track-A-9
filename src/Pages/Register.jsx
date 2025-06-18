import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
     const  navigate = useNavigate();
    const {createUser, updateUser, setUser} = useContext(AuthContext);
    // console.log('createUser', createUser);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);

        //create user with email and password
        createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success('Register successfully')
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
        
      });
    }
  return (
    <div>
        <Helmet>
            <title>Registration | JobsTrack</title>
        </Helmet>
        <div className="max-w-sm mx-auto  p-9 rounded-2xl mt-9 shadow-lg bg-slate-200 mb-12">
      <h2 className="text-3xl mb-9">Please Register Now !</h2>
      <form className="space-y-4" onSubmit={handleRegister}>
        {/* name field */}
      <label className="label"> Name : </label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Enter Your Name "
              required
            />
            {/* Photo-URL field */}

            <label className="label"> Photo-URL : </label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="Enter Your Photo-URL "
            />

            <label className="label">Email : </label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Enter Your Email"
              required
            />

        <br />
        {/* Password field */}
           <label className="label">Password : </label>
        <label className="input validator">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            placeholder="Password"
            minLength="6"
            pattern="(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Must be more than 6 characters, lowercase letter, uppercase letter"
          />
              <button
                         onClick={() => {
                           setShowPassword(!showPassword);
                         }}
                         type="button"
                        
                         className="btn btn-xs absolute top-2 right-8"
                       >
                         {showPassword ? <FaEyeSlash /> : <FaEye />}
                       </button>
        </label>
        <p className="validator-hint hidden">
          Must be more than 6 characters, including
          <br />
          {/* At least one number <br /> */}
          At least one lowercase letter <br />
          At least one uppercase letter
        </p>
        <br />
        {/* Submit Button */}
        
         <button   type="submit"  className="btn btn-neutral w-full mt-4">
          Register
        </button>  
      </form>

      {/* <p>Already have an account? Please <Link to={"/login"}>Register</Link></p> */}


      <p className="mt-3">Already have an account?  Please <Link to='/login' className=" text-blue-500 underline">
        Login</Link>
        </p>
    </div>
    </div>
  );
};

export default Register;