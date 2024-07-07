import React, {FC} from 'react';
import {IPost} from "../modals/IPost";

interface IProp {
    posts: IPost[];
}

const PostComponent: FC <IProp> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <div key={post.id}><h5>{post.id}: User ID {post.userId} </h5>
                <h3>{post.title}</h3> <p>{post.body}</p></div> )
            }
        </div>

    );
};

export default PostComponent;