import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postAction} from "../redux/slices/PostSlice";
import PostsComponent from "../components/posts/PostsComponent";

const PostsPage = () => {

    let dispatch = useAppDispatch()
    let {posts} = useAppSelector(state => state.postStore)

    useEffect(() => {
        dispatch(postAction.loadPosts())
    }, []);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;