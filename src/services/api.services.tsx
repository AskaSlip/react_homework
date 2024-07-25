import axios from "axios";
import {UserModel} from "../models/UserModel";
import {UserResponseModel} from "../models/UserResponseModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefreshModel} from "../models/TokenRefreshModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'

})


const userService = {
    saveUser: async (data: UserModel): Promise <boolean> => {
        let response = await axiosInstance.post<UserResponseModel>('/users', data)
        console.log(response.status === 201);
        return !!response.data.id || false
    }
}


const authService = {
    authUser: async (data: TokenObtainPairModel): Promise<void> => {
        let response = await axiosInstance.post<TokenRefreshModel>('/auth', data)
        console.log(response);
        console.log(response.data.access);
        console.log(response.data.refresh);
    }
}


export {
    userService, authService
}