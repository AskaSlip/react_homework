import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {postSlice} from "../slices/postSlice";

export let store = configureStore({
    reducer: {
        postSlice: postSlice.reducer
    }
})

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();