import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getAllPosts} from "../../services/api.services";
import PostComponent from "../postComponent/postComponent";

const PostsComponent = () => {


    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getAllPosts().then((posts) => {
            setPosts([...posts])
        })
    },[])

    return (
        <div>
            {posts.map((post: IPost) => (
                <PostComponent
                    key={post.id}
                    post={post}
                />
            ))
            }
        </div>
    );
};

export default PostsComponent;