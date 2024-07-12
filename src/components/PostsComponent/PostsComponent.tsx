import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import styles from './PostsComponent.module.css'
import PostComponent from "../PostComponent/PostComponent";

interface IProp {
    posts: IPost[]
}

const PostsComponent:FC<IProp> = ({posts}) => {
    return (
        <div className={styles.wrapper}>
            {posts.map(post => (
                <PostComponent
                    key={post.id}
                    post={post}/>
            ))}
        </div>
    );
};

export default PostsComponent;