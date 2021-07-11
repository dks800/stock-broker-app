import React, { useContext, useState, useEffect } from 'react';
import fire from '../fire';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const handleSignUp = (email, password) => {
        return fire.auth().createUserWithEmailAndPassword(email, password);
    }
    
    const handleSignIn = (email, password) => {
        return fire.auth().signInWithEmailAndPassword(email, password);
    }

    const handleLogout = () => {
        fire.auth().signOut();
    }
    
    const forgotPassword = () => {
        //
    }
    

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, []);

    const value = { currentUser, handleSignUp, handleSignIn, handleLogout, forgotPassword };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
 