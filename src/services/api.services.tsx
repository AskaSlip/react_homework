import axios from "axios";
import {urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

let axiosInstance = axios.create({
    baseURL: urls.baseURL
})

const getAllUsers = async ():Promise<IUser[]> => {
    return await axiosInstance.get(urls.baseURL + urls.usersUrl + urls.usersLimit).then(value => value.data.users)
}

const getAllUsersWithSkip = async (skip: number):Promise<IUser[]> => {
    return await axiosInstance.get(urls.baseURL + urls.usersUrl + urls.usersLimit + urls.skipPart + skip).then(value => value.data.users)
}

const getAllPosts = async ():Promise<IPost[]> => {
    return await axiosInstance.get(urls.baseURL + urls.postsUrl + urls.postsLimit).then(value => value.data.posts)
}

const getAllPostsWithSkip = async (skip: number):Promise<IPost[]> => {
    return await axiosInstance.get(urls.baseURL + urls.postsUrl + urls.postsLimit + urls.skipPart + skip).then(value => value.data.posts)
}

const getAllComments = async ():Promise<IComment[]> => {
    return await axiosInstance.get(urls.baseURL + urls.commentsUrl + urls.commentsLimit).then(value => value.data.comments)
}

const getAllCommentsWithSkip = async (skip: number):Promise<IComment[]> => {
    return await axiosInstance.get(urls.baseURL + urls.commentsUrl + urls.commentsLimit + urls.skipPart + skip).then(value => value.data.comments)
}


export {getAllUsers,getAllComments,getAllPosts, getAllCommentsWithSkip, getAllUsersWithSkip, getAllPostsWithSkip}