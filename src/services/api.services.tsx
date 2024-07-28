import axios from "axios";
import {UserModel} from "../models/UserModel";
import {UserResponseModel} from "../models/UserResponseModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefreshModel} from "../models/TokenRefreshModel";
import {retriveLocalStorageData} from "../helpers/helpers";
import {CarPaginatedModel} from "../models/CarPaginatedModel";
import {CarWithAuthModel} from "../models/CarWithAuthModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'

})

axiosInstance.interceptors.request.use(requestObject => {


    if (localStorage.getItem('tokenPair') && requestObject.url !== '/auth'){
        requestObject.headers.set('Authorization', "Bearer " + retriveLocalStorageData<TokenRefreshModel>('tokenPair').access)
    }
    console.log(requestObject);

    return requestObject;
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
        localStorage.setItem('tokenPair', JSON.stringify(response.data))

    }
}

const carService = {
    getCars: async (): Promise <CarPaginatedModel> => {
        let response = await axiosInstance.get<CarPaginatedModel>('/cars')

        let data = response.data
        console.log(data);
        return data
    },

    createCar: async (data: CarWithAuthModel): Promise<CarWithAuthModel> => {
        let response = await axiosInstance.post<CarWithAuthModel>('/cars', data)
        return response.data
    }
}


export {
    userService, authService, carService
}