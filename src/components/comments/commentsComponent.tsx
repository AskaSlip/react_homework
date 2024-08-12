import React, {FC} from 'react';
import {IComment} from "../../models/IComment";
import CommentComponent from "../comment/commentComponent";

interface IProps {
    comments: IComment[];
}

const CommentsComponent:FC<IProps> = ({comments }) => {


    return (
        <ul>
            {
                comments.map((comment) => (<li key={comment.id}>
                    <CommentComponent comment={comment}/>
                </li>))
            }
        </ul>
    );
};

export default CommentsComponent;