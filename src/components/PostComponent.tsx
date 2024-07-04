import React, {Component} from 'react';
import {IPost} from "../models/IPost";

type MyProp = {
    posts: IPost[];
}

class PostComponent extends Component<MyProp,{}> {
    render() {
        return (
            <div>
                {this.props.posts.map(post => <li key={post.id}>{post.title}: {post.body}</li>)}
            </div>
        );
    }
}

export default PostComponent;