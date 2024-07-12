import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import ErrorLayout from "./layouts/ErrorLayout";
import HomePage from "./pages/HomePage";
import TodosPage from "./components/TodoDirectory(not used, only example)/TodosPage";
import TodoPage from "./components/TodoDirectory(not used, only example)/TodoPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {path: '/',
        errorElement: <ErrorLayout/>,
        element: <MainLayout/>,
        children:[
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>}
            // {path: 'todos', element: <TodosPage/>, children: [
            //         {path: ':id', element: <TodoPage/>}
            //     ]},

        ]}
])


root.render(
<RouterProvider router={router}/>

);

