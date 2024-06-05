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
import Alluser from "../pages/Dashboard/Alluser/Alluser";
import AddItmes from "../pages/Dashboard/AddItems/AddItmes";
import AdminRoute from "./AdminRoute"
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";



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
        },
        // admin
        {
          path:'users',
          element:<Alluser></Alluser>
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItmes></AddItmes></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) =>  fetch(`http://localhost:5000/menu/${params.id}`)

        },
      ]
      

    }
    
  ]);

  