import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentAction} from "../redux/slices/CommentSlice";
import CommentsComponent from "../components/comments/commentsComponent";

const CommentsPage = () => {

    let dispatch = useAppDispatch()
   let {comments, isLoaded} =  useAppSelector(state => state.commentStore)

    useEffect(() => {
        dispatch(commentAction.loadComments())
    }, []);

    return (
        <div>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;