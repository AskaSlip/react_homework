import {createAsyncThunk} from "@reduxjs/toolkit";
import {postsService} from "../../../services/api.services";
import {AxiosError} from "axios";

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            let response = await postsService.getPosts();
            return thunkAPI.fulfillWithValue(response)
        }catch (e){
            let error = e as AxiosError
            return thunkAPI.rejectWithValue(error)
        }
    }
)