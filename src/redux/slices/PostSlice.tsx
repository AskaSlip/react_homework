import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost";
import {IComment} from "../../models/IComment";
import {postService} from "../../services/api.services";
import {AxiosError} from "axios";

type postSliceType = {
    posts: IPost[],
    postComments: IComment[],
    error: string
}

let initState: postSliceType = {
    posts: [],
    postComments: [],
    error: ':('
}

let loadPosts = createAsyncThunk ('postSlice/loadPosts', async (_, thunkAPI) => {
    try {
        let posts = await postService.getAll()
        return thunkAPI.fulfillWithValue(posts)
    }catch (e){
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})

let loadPostComments = createAsyncThunk ('postSlice/loadPostComments', async (postId: number, thunkAPI) => {
    try {
        let post = await postService.getCommentByPostId(postId)
        return thunkAPI.fulfillWithValue(post)
    }catch (e){
        let error = e as AxiosError
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})



export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload
            })
            .addCase(loadPostComments.fulfilled, (state, action) => {
                state.postComments = action.payload
            })
            .addMatcher(isRejected(loadPosts,loadPostComments), (state, action) => {
                state.error = action.payload as string
            })
})

export let postAction = {
    ...postSlice.actions,
    loadPostComments,
    loadPosts
}