import axios from "axios";
import {IUser} from "../models/IUser";
import {baseUrl, urls} from "../constants/constants";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl
});

export const userService = {
    getAll: async () => {
        const response = await axiosInstance.get<IUser[]>(urls.users.base)
        return response.data
    }
}

export const postService = {
    getAll: async () => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base)
        return response.data
    }
}
