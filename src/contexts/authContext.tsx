import React, {createContext, useContext, useState, useEffect} from 'react'
import firebase from 'firebase/app'

import { auth } from '../firebase'

interface AuthContextData {
    currentUser: firebase.User | null
    signup(email: string, password: string): Promise<firebase.auth.UserCredential>
    signin(email: string, password: string): Promise<firebase.auth.UserCredential>
    signout(): Promise<void>
    resetPassword(email: string): Promise<void>
    updateEmail(email: string): Promise<void> | undefined
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)
    const [loading, setLoading] = useState(true)

    function signup(email: string, password: string){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signin(email: string, password: string){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function signout(){
        return auth.signOut()
    }

    function resetPassword(email: string){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email: string){
        return currentUser?.updateEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    },[])

    const value = {
        currentUser,
        signup,
        signin,
        signout,
        resetPassword,
        updateEmail
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}