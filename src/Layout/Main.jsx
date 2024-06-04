import { Outlet, useLocation } from "react-router-dom"
import Footer from "../pages/sharit/Footer/Footer"
import Navbar from "../pages/sharit/Navar/Navbar"



const Main = () => {
  const location=useLocation()
  const noHeaderFooter=location.pathname.includes("login")
  return (
    
    
    <div> 
       { noHeaderFooter|| <Navbar/>}
        <Outlet/>
   {  noHeaderFooter||   <Footer/>}
     </div>
  )
}

export default Main