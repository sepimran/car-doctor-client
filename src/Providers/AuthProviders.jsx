import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader , setLoader] = useState(true);

    const createUser = (email , password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth , email,password)
    }

    const signInUser = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth , googleAuthProvider);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth , (loggedUser) =>{
            setUser(loggedUser);
            setLoader(false);
        })

        return  () =>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        loader,
        createUser,
        signInUser,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;