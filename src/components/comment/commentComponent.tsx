import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

interface IProps {
    comment: IComment
}

const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            {comment.id}: {comment.name}
        </div>
    );
};

export default CommentComponent;