import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Classes from './component/Routes/Classes';
import ErrorPage from './component/ErrorPage/ErrorPage';
import AuthProvider from './component/AuthProvider';
import Login from './component/Routes/Login';
import Register from './component/Register/Registser';
import Instructors from './component/Routes/Instructors';
import Dashboard from './component/Dashboard/Dashboard';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/classes",
        element: <Classes></Classes>
      },
      {
        path:"/login",
        element:<Login></Login> 
      },
      {
        path:"/register",
        element:<Register></Register> 
      },
      {
        path:"/instructors",
        element:<Instructors></Instructors>
      }
    ]
  },

  {
    
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
