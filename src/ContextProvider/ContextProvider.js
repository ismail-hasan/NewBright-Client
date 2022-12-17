import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/FireBase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

export const authContext = createContext()
const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const Auth = getAuth(app)


    const signUpUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(Auth, email, password)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(Auth)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            console.log('current User is', currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const updateUser = (clientInfo) => {
        return updateProfile(Auth.currentUser, clientInfo)
    }
    //////////////////////////


    // const reivewsStart = (ratings) => {
    //      Array.from({ length: 5 }, (elem, index) => {
    //         let number = index + 0.5
    //         return (
    //             <span className='mb-3'>
    //                 {
    //                     ratings >= index + 1 ? <FaStar className='mr-1 text-lg' ></FaStar>
    //                         :
    //                         ratings >= number ? <FaStarHalfAlt className='mr-1 text-lg' ></FaStarHalfAlt>
    //                             :
    //                             <AiOutlineStar className='mr-1 text-lg' ></AiOutlineStar>
    //                 }
    //             </span>
    //         )
    //     })
    // }


    //////////////////////////

    const userInfo = {
        user,
        signUpUser,
        logInUser,
        updateUser,
        logOut,
        loading,
    }
    return (

        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default ContextProvider;