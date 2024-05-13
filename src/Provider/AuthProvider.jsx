import { useEffect, useState } from "react"
import { createContext } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
   
  const creatUser=(email,password)=>{
    setLoading(true)
  
    return  createUserWithEmailAndPassword(auth, email, password)


  }
   
   
 const signIn=(email,password)=>{
 setLoading(true)

 return signInWithEmailAndPassword(email,password)
 }
 const logOut=()=>{
    setLoading(true);
     return signOut(auth)

 }

    useEffect(()=>{
    const nusubscribe =onAuthStateChanged(auth,currentUser=>{

        setUser(currentUser)
        console.log('current user ',currentUser)
        setLoading(false)
    })

    return ()=>{
        return nusubscribe()
    }

   },[])
   
    const authInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider