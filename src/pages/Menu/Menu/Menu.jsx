import { Helmet } from "react-helmet-async"
import Cover from "../../sharit/cover/Cover"
import menuImg from "../../../assets/menuss/banner3.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Component/Section-title/SectionTitle";
import MenuCategory from "../Menu-Category/Menu-Category";
import Desrt from "../../../assets/menuss/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menuss/pizza-bg.jpg"
import saladImg from "../../../assets/menuss/salad-bg.jpg"
import soupImg from "../../../assets/menuss/soup-bg.jpg"
const Menu = () => {
  const [menu] = useMenu();
  
  
  const desserts = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
 
  return (
   
 
    <div>
 <Helmet>
         <title>bistro | menu</title>
        </Helmet>
        <Cover bal={'700px'} img={menuImg}  title="our menu"></Cover>
          
          <SectionTitle subHeading="Don't Miss" heading="Today's Offer"/>

          <MenuCategory bal={'700px'} item={offered} />
          <MenuCategory bal={'700px'} item={desserts} title="Desserts" Img={Desrt} />
          <MenuCategory bal={'700px'} item={pizza} title={"pizza"} Img={pizzaImg}></MenuCategory>
            <MenuCategory bal={'700px'} item={salad} title={"salad"} Img={saladImg}></MenuCategory>
            <MenuCategory bal={'600px'} item={soup} title={"soup"} Img={soupImg}></MenuCategory>
    </div>
  )
}

export default Menu