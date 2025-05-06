import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../utils/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // ✅ false → null
    console.log('AuthProvider User',user);

  const createUser = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOUtUser = () => {
    return signOut(auth); // ✅ return দাও, না দিলে .then().catch() কাজ করবে না
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('✅ Authenticated user:', currentUser);
        setUser(currentUser); // ✅ setUser(currentUser) দিয়ে user state আপডেট করলাম
    //   if (currentUser) {
    //     setUser(currentUser);
    //   } else {
    //     console.log('❌ No user found');
    //     setUser(null);
    //   }
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    createUser,
    signInUser,
    logOUtUser,
  };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
