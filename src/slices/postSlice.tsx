import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IPost} from "../models/IPost";
import {loadPosts} from "../redux/redusers/posts/posts.extraReducers";

type postSliceType = {
    posts: IPost[],
    IsLoaded: boolean
}

const postInitState:postSliceType = {
    posts: [],
    IsLoaded: false
}


export const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addMatcher(isFulfilled(loadPosts), (state, action) => {
                state.IsLoaded = true
            })
    }
})

export const postsActions ={
    ...postSlice.actions,
    loadPosts
}