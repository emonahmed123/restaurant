import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivetRoute from "./PrivateRoute";



export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:
            "/",
            element:<Home></Home>
        },
        {
            path: "menu",
            element: <Menu></Menu>
           
          },
        {
            path:"ourShop/:category",
            element: <OurShop/>,
           
          },
        {
            path:"login",
            element: <Login/>,
           
          },
        {
            path:"singup",
            element: <Signup/>,
           
          },
      ]

      
    },
    {
      path:'dashboard',
      element:<PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children:[
        {
          path:'cart',
          element:<Cart></Cart>
        }

      ]

    }
    
  ]);

  