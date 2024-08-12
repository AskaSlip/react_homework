import axios from "axios";
import {IUser} from "../models/IUser";
import {baseUrl, urls} from "../constants/urls";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

let axiosInstance = axios.create({
    baseURL: baseUrl
})

export const userService = {
    getAll: async () : Promise<IUser[]>=> {
       let response = await axiosInstance.get<IUser[]>(urls.users.base)
        return response.data
},
    getById: async (id:number) : Promise<IUser>=> {
        let response = await axiosInstance.get<IUser>(urls.users.byId(id))
        return response.data
    }
}

export const postService = {
    getAll: async () : Promise<IPost[]>=> {
        let response = await axiosInstance.get<IPost[]>(urls.posts.base)
        return response.data
    },
    getCommentByPostId: async (postId:number) : Promise<IComment[]>=> {
        let response = await axiosInstance.get<IComment[]>(urls.posts.byPostIdComments(postId))
        return response.data
    }
}

export const commentService = {
    getAll: async () : Promise<IComment[]>=> {
        let response = await axiosInstance.get<IComment[]>(urls.comments.base)
        return response.data
    }
}