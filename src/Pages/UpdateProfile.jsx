import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    // এখানে তুমি firebase user update logics বা db call বসাতে পারো future এ
    console.log("Updated Info:", { name, photoURL });
    toast.success("Information updated successfully!");

    // এখন শুধু profile page এ পাঠিয়ে দিচ্ছি
    navigate('/my-profile');
  };

  return (
    <div className="w-11/12 max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
      <Helmet>
        <title>Update Profile | JobsTrack</title>
      </Helmet>

      <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Update Your Information</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter photo URL"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">Update Information</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
