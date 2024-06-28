import {IPost} from "../models/IPost";
import React, {FC} from 'react';


interface IProps {
    posts: IPost[]
}

const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <ol>
            {
                posts.map(value => <li key={value.id}>{value.id}: {value.title}{value.body}</li>)
            }
        </ol>
    );
};

export default PostsComponent;