import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

import Menu from "../pages/Menu/Menu/Menu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";

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
            element: <Menu/>,
           
          },
        {
            path:"ourShop/:category",
            element: <OurShop/>,
           
          },
        {
            path:"login",
            element: <Login/>,
           
          },
      ]

      
    },
    
  ]);

  