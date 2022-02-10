import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setUser(result.user);
            })
            .catch(error => setError(error));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
        })
    }, []);

    // User signout 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // console.log('Logout succesfull');
                setUser({});
            })
            .catch(error => setError(error))
    }


    return {
        user,
        signInWithGoogle,
        logOut
    };

};

export default useFirebase;