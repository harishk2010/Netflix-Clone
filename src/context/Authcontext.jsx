import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/FirebaseConfig";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";

  const AuthContext=createContext()

  export const AuthProvider= ({children})=>{
    const [user,setUser]=useState(null)

    const signUp=async (userName,email,password)=>{
        try {
            let  userCredentials=await createUserWithEmailAndPassword(auth,email,password)
            if(userCredentials){
                await updateProfile(userCredentials?.user,{
                    displayName:userName
                })
            }
            return {success:true}

        } catch (error) {
            console.log(error);
            return { success: false };
            
        }
    }
    const logIn=async (email,password)=>{
        try {
            await signInWithEmailAndPassword(auth,email,password)
            return {success:true}
        } catch (error) {
            console.log(error);
            return { success: false };
            
        }

    }

    const logOut=async()=>{
        try {
            signOut(auth)
            
        } catch (error) {
            console.log(error);
           
        }
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })

        return()=>{
            unsubscribe()
        }
    },[])

    return(
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )



  }

  export default AuthContext;