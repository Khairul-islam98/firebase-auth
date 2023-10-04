import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }

    const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        setLoading(true)
    }
    const singInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        return signOut(auth)
        setLoading(true)
    }
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log("currentUser: ", currentUser)
        setUser(currentUser)
        setLoading(false)
    });
    return () => {
        unsubscribe()
    }
   },[])
    const authInfo = { user, createUser, singInUser, logOut, loading, singInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;