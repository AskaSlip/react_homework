import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {getAllComments} from "../../services/api.services";
import CommentComponent from "../commentComponent/commentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getAllComments().then((comments) => {
            setComments([...comments])
        })
    }, [])

    return (
        <div>
            {comments.map((comment) => (
                <CommentComponent
                    key = {comment.id}
                    comment={comment}/>
            ))
            }
        </div>
    );
};

export default CommentsComponent;