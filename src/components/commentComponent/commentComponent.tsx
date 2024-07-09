import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

interface IProp {
    comment: IComment
}

const CommentComponent:FC <IProp> = ({comment}) => {
    return (
        <div>
            {comment.id}  {comment.postId}: {comment.email} - {comment.name}: {comment.body}
        </div>
    );
};

export default CommentComponent;