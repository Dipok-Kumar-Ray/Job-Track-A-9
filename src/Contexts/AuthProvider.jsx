import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase.init";
import { AuthContext } from "./AuthContext";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
   
  };




  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }





  const logOUtUser = () => {
    return signOut(auth); 
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  
        setUser(currentUser); 

      });
    
      return () => unsubscribe();
    }, []);


  const userInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    logOUtUser,
    googleLogin,
    resetPassword,
    updateUser,
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
