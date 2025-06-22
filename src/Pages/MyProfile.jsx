import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-11/12 max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <Helmet>
        <title>My Profile | JobsTrack</title>
      </Helmet>

      <div className="flex flex-col items-center text-center">
        <img
          src={user?.photoURL || 'https://i.ibb.co/sP6V4GY/default-avatar.png'}
          alt={user?.displayName || 'User'}
          className="w-32 h-32 rounded-full object-cover shadow mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-600">
          {user?.displayName || 'Anonymous User'}
        </h2>
        <p className="text-gray-700 mt-1">{user?.email || 'No Email Found'}</p>

        <Link to="/update-profile">
          <button className="btn btn-primary mt-4">Update Information</button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
