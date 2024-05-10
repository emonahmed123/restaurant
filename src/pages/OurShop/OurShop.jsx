import Cover from "../sharit/cover/Cover"
import shop from "../../assets/shop/banner2.jpg"
import OrderTab from "./OrderTab/OrderTab"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import { useParams } from "react-router-dom"
import useMenu from "../../hooks/useMenu"
import { useState } from "react"
import 'react-tabs/style/react-tabs.css';
const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    console.log(category)
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
 
    return (
   
   
   <div>

<Cover bal={'500px'} img={shop}  title="our Shop"></Cover>
<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList >
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>



<OrderTab/>


    </div>
  )
}

export default OurShop