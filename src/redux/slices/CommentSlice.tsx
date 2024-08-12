import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment";
import {commentService} from "../../services/api.services";
import {AxiosError} from "axios";

type commentSliceType = {
    comments: IComment[],
    isLoaded: boolean,
    error: string
}

const initState: commentSliceType = {
    comments: [],
    isLoaded: false,
    error: 'something goes wrong'
}


let loadComments = createAsyncThunk ('commentSlice/loadComments', async (_, thunkAPI) => {
try {
    let comments =await commentService.getAll()
    return thunkAPI.fulfillWithValue(comments)
}catch (e){
    let error = e as AxiosError
    return thunkAPI.rejectWithValue(error?.response?.data)
}

})



export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action) => {
                state.comments = action.payload
            })
            .addMatcher(isRejected(loadComments), (state, action) => {
                state.error = action.payload as string
            })
})

export let commentAction = {
    ...commentSlice.actions,
    loadComments
}