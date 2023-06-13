import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider } from "firebase/auth";
import app from '../../firebase.config';
import axios from 'axios';



export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const updateUserProfile = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }



    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                console.log(currentUser.email)
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            }

            else {
                localStorage.removeItem('access-token')
            }
        }) 
        return () => {
            unsubscribe();
        }
    }, [])


    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;