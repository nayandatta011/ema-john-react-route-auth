import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const authContect = createContext();

const AuthProvider = ({ children }) => {
    // const {children} = props;
    const firebaseContext = useFirebase();
    return (
        <authContect.Provider value={firebaseContext}>
            {children}
        </authContect.Provider>
    );
};

export default AuthProvider;