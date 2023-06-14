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
import SelectedClasses from './component/Dashboard/SelectedClasses';
import EnrolledClasses from './component/Dashboard/EnrolledClasses';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MyClasses from './component/Dashboard/Instructor/MyClasses';
import AddAClass from './component/Dashboard/Instructor/AddAClass';
import ManageUsers from './component/Dashboard/Admin/ManageUsers';
import ManageClasses from './component/Dashboard/Admin/ManageClasses';
import PaymentHistory from './component/Dashboard/Admin/PaymentHistory';
import Payment from './component/Dashboard/Payment';

const queryClient = new QueryClient()


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
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      },
     
    ]
  },

  {

    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/selectedClasses",
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path: "/dashboard/enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>
      },
     
      ,
      {
        path: "/dashboard/myClasses",
        element: <MyClasses></MyClasses>
      }
      ,
      {
        path: "/dashboard/addAClasses",
        element: <AddAClass></AddAClass>
      }
      ,
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers></ManageUsers>
      }
      ,
      {
        path: "/dashboard/manageClasses",
        element: <ManageClasses></ManageClasses>
      },
      {
        path:"/dashboard/paymentHistory",
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'/dashboard/payment',
        element:<Payment></Payment>
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
