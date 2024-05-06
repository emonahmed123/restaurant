import { Helmet } from "react-helmet-async"
import Cover from "../../sharit/cover/Cover"
import menuImg from "../../../assets/menuss/banner3.jpg"


const Menu = () => {
  return (
   
 
    <div>
 <Helmet>
         <title>bistro | menu</title>
        </Helmet>
        <Cover img={menuImg}  title="our menu"></Cover>

    </div>
  )
}

export default Menu