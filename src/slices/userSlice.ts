import {IUser} from "../models/IUser";
import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {loadUsers} from "../redux/redusers/user/user.extraReducers";


type UserSliceType = {
    users: IUser[],
    IsLoaded: boolean
}

const userInitState:UserSliceType = {
    users: [],
    IsLoaded: false
}


export const userSlice = createSlice({
    name:'userSlice',
    initialState: userInitState,
    reducers:{},
    extraReducers: (builder) =>
        builder
            .addCase(loadUsers.fulfilled,(state, action) => {
                state.users = action.payload;
            })
            .addMatcher(isFulfilled(loadUsers), (state) => {
                state.IsLoaded = true
            })

});

export const userAction = {
    ...userSlice.actions,
    loadUsers
}