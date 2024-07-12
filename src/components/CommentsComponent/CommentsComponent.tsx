import React, {FC} from 'react';
import styles from './CommentsComponent.module.css'
import {IComment} from "../../models/IComment";
import CommentComponent from "../CommentComponent/CommentComponent";

interface IProp {
    comments: IComment[]
}

const CommentsComponent:FC <IProp> = ({comments}) => {
    return (
        <div className={styles.wrapper}>
            {comments.map((comment) => (
                <CommentComponent
                    key={comment.id}
                    comment={comment}/>
            ))}
        </div>
    );
};

export default CommentsComponent;