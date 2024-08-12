import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage";
import SortedPage from "../pages/SortedPage";
import CommentsPage from "../pages/CommentsPage";
import PostPage from "../pages/PostPage";

export const index = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>error 404!!!</h1>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'users/sort', element: <SortedPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'posts/:postId', element: <PostPage/>}
        ]
    }
])