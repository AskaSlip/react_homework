import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postAction} from "../redux/slices/PostSlice";

const PostPage = () => {

    let {postId} = useParams();

    let dispatch = useAppDispatch();
    let post = useAppSelector(state => state.postStore.postComments)

    useEffect(() => {
        if (postId) dispatch(postAction.loadPostComments(+postId))
    }, [postId]);

    return (
        <div>
            {
                post.map(value => (
                    <div>post:{value.postId} - title: {value.name}</div>
                ))
            }
        </div>
    );
};

export default PostPage;