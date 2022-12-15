import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const authContext = createContext()
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const Auth = getAuth(app)


    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const logOut = () => {
        return signOut(Auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            console.log('current User is', currentUser)
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])

    const userInfo = { user, signUpUser, logInUser, logOut }
    return (

        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextProvider;