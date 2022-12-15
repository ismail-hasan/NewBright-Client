import React, { createContext, useState } from 'react';
import app from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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




    const userInfo = { signUpUser, logInUser }
    return (

        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextProvider;