import { Outlet } from "react-router-dom"
import Footer from "../pages/sharit/Footer/Footer"
import Navbar from "../pages/sharit/Navar/Navbar"



const Main = () => {
  return (
    <div> 
        <Navbar/>
        <Outlet/>
    <Footer/>
     </div>
  )
}

export default Main