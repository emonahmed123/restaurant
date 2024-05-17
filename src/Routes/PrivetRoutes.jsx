import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom"


const PrivetRoutes = ({chlidren}) => {

const {user,logding}=useContext(AuthContext)
const location=useLocation();
 if(logding){
    return <p className="pt-5">Loding...</p>
 }

if(user){
    return chlidren

}
else
  return <Navigate to="/login" state={{from:location}} ></Navigate>
  
}


export default PrivetRoutes