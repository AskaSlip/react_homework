import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {commentSlice} from "./slices/CommentSlice";
import {postSlice} from "./slices/PostSlice";

export const store = configureStore({
    reducer: {
        userStore: userSlice.reducer,
        postStore: postSlice.reducer,
        commentStore: commentSlice.reducer
    }
})

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();