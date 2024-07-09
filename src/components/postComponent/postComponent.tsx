import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IProp{
    post: IPost;
}

const PostComponent:FC<IProp> = ({post}) => {
    return (
        <div>
            {post.id}: {post.userId}  {post.title}: {post.body}
        </div>
    );
};

export default PostComponent;