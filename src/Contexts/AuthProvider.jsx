import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase.init';





const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


  const createUser = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updatUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }

  const logOUtUser = () => {
    return signOut(auth); 
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        // console.log(' Authenticated user:', currentUser);
        setUser(currentUser); 

      });
    
      return () => unsubscribe();
    }, []);

    //     setUser(currentUser);
    //   } else {
    //     console.log(' No user found');
    //     setUser(null);
    //   }

  const userInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    logOUtUser,
    googleLogin,
    resetPassword,
    updatUser,
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
