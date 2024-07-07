import axios from "axios";
import {baseUrl} from "../constants/urls";
import {IForm} from "../modals/IForm";
import {IPost} from "../modals/IPost";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

const createPost = async (data:IForm):Promise<IPost> => {
    const response = await axiosInstance.post<IPost>(baseUrl, {
            title: data.title,
            body: data.body,
            userId: data.userId,
    })
    console.log(response.data);
    return response.data;
}


const getAllPosts = async (): Promise<IPost[]> => {
    return await axiosInstance.get(baseUrl).then((response) => response.data)
}

export  {createPost, getAllPosts}