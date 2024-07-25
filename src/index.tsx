import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthPage from "./pages/AuthPage";
import RegPage from "./pages/RegPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/',
        errorElement: <div>aaaaaa here a mess</div>,
        element: <MainLayout/>,
        children: [
            {
                index: true, element: <AuthPage/>
            },
            {
                path: '/registration', element: <RegPage/>
            }
        ]

    }



])




root.render(
    <RouterProvider router={router}/>

);

