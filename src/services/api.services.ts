import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl
})

const postsService = {
    getPosts: async () => {
        let response = await axiosInstance.get<IPost[]>(urls.posts)
        return response.data
    }
}

export {postsService}