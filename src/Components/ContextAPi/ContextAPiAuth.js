import { Children, createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup}  from 'firebase/auth';
import app from "../../Firebase/Firebase.config";

export const AuthProvider = createContext();

const auth = getAuth(app);

function ContextAPiAuth ({children}){

    const createUser=(email, password)=>{
      return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
    }

    const signWithGoogle = (provider)=>{
      return signInWithPopup(auth, provider)
    }

    const authInfo = {createUser,signInUser,signWithGoogle}
    return(
      <AuthProvider.Provider value={authInfo}>
        {children}
      </AuthProvider.Provider>
    )
}

export default ContextAPiAuth;