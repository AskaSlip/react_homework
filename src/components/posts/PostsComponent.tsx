import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import PostComponent from "../post/postComponent";
import {Link} from "react-router-dom";

interface IProps{
    posts: IPost[]
}

const PostsComponent:FC<IProps> = ({posts}) => {


    return (
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>
                        <Link to={'/posts/' + post.id}>
                        <PostComponent post={post}/>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default PostsComponent;