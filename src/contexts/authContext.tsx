import React, {createContext, useContext, useState, useEffect} from 'react'
import firebase from 'firebase/app'

import { auth } from '../firebase'

interface AuthContextData {
    currentUser: firebase.User | null
    signup(email: string, password: string): Promise<firebase.auth.UserCredential>
}

const AuthContext = createContext({} as AuthContextData)

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({children}) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

    function signup(email: string, password: string){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    },[])

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}