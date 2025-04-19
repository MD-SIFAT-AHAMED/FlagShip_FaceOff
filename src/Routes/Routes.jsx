import {createBrowserRouter} from "react-router";
import MainLayOut from "../MainLayout/MainLayOut";
import Home from "../Pages/Home";
import About from "../Pages/About";


const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayOut,
      errorElement: <p>hi error</p>,
      children:[
            {
            path:'/',
            loader: ()=> fetch('phoneData.json'),
            Component:Home,
            },
            {
                path:'/about',
                Component:About
            }
        ]
    },
  ]);

export default router;