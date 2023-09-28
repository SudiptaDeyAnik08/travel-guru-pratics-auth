import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

import News from '../News/News'
import Home from "../Home/Home";
import Destination from '../Destination/Destination'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Login from "../Login/Login";
import Register from "../Register/Register";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import Dashboard from "../Dashboard/Dashboard";

export const routes  = createBrowserRouter([

   {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
       {
        path:'/news',
        element:<News></News>
       },
       {
        path:'/destination',
        element:<Destination></Destination>
       },
       {
        path:'/blog',
        element:<Blog></Blog>
       },
       {
        path:'/Contact',
        element:<Contact></Contact>
       },
       {
        path:'/login',
        element:<Login></Login>
       },
       {
        path:'/register',
        element:<Register></Register>
       },
       {
        path:'/termsAndConditon',
        element:<TermsAndConditions></TermsAndConditions>
       },
       {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
       }
    ]
   }
]);