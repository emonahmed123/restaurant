import { Helmet } from "react-helmet-async"
import Banner from "./Banner/Banner"
import Catagory from "./Catagory/Catagory"
import Featured from "./Featured/Featured"
import PopularMenu from "./PopolarMenu/PopularMenu"
import Testimonials from "./Testimonials/Testimonials"


const Home = () => {
  return (
 <div>
     <Helmet>
         <title>bistro  | Home</title>
        </Helmet>
       <Banner/>
    <Catagory/>
    <PopularMenu/>
    <Featured/>
    <Testimonials/>
 </div>
  )
}

export default Home