import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
})

const getAllUsers = async ()=> {
    return await axiosInstance.get('/users'+'?limit=0').then((response) => response.data.users)
};

const getAllPostsByUserId = async (id:number)=> {
    return await axiosInstance.get('/posts/user/'+id).then((response) => response.data.posts)
}

export {getAllUsers,getAllPostsByUserId}