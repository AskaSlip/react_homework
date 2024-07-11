import axios from "axios";
import {urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

let axiosInstance = axios.create({
    baseURL: urls.baseURL
})

const getAllUsers = async ():Promise<IUser[]> => {
    return await axiosInstance.get(urls.baseURL + urls.usersUrl).then(value => value.data.users)
}

const getAllPosts = async ():Promise<IPost[]> => {
    return await axiosInstance.get(urls.baseURL + urls.postsUrl).then(value => value.data.posts)
}

const getAllComments = async ():Promise<IComment[]> => {
    return await axiosInstance.get(urls.baseURL + urls.commentsUrl).then(value => value.data.comments)
}

export {getAllUsers,getAllComments,getAllPosts}