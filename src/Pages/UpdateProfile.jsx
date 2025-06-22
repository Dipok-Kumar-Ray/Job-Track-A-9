import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      setUser({ ...user, displayName: name, photoURL: photo });

      Swal.fire({
        icon: 'success',
        title: 'Profile Updated!',
        text: 'Your name and photo were successfully updated.',
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed!',
        text: error.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-lg rounded">
       <Helmet>
            <title>Profile || Subscription</title>
          </Helmet>
      <h2 className="text-2xl font-bold mb-4 text-primary text-center">My Profile</h2>

      <div className="text-center mb-4">
        <img src={user?.photoURL} alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-2 border" />
        <p className='text-primary'><strong>Name:</strong> {user?.displayName}</p>
        <p className='text-primary'><strong>Email:</strong> {user?.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="text-primary">Update Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered bg-blue-700 text-white w-full"
            required
          />
        </div>
        <div>
          <label className="text-primary">Update Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered bg-blue-700 text-white w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Update Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
