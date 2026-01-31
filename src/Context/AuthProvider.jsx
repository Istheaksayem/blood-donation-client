import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({children}) => {

    const [user,setUser] =useState(null);
    const [loading, setLoading] =useState(true)
    // register User 
    const registerUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    // updater User Profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
     //  Login User
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
   useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser)
        })

        return () => {
            unSubscribe()
        }
    }, [])
    const AuthInfo ={
        user,
        loading,
        registerUser,
        updateUserProfile,
        signInUser,
        setLoading
    }
    return (
       <AuthContext value={AuthInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;