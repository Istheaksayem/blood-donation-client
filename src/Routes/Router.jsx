import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Components/Registration/Registration";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"registration",
        Component:Registration
      },
      {
        path:"login",
        Component:Login
      }
    ]
  },
]);