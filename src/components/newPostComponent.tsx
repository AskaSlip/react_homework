import React, {FC} from 'react';
import {IPost} from "../modals/IPost";

interface IProp {
    newPost: IPost;
}

const NewPostComponent:FC <IProp> = ({newPost}) => {
    return (
        <div key={newPost.id}><h5>{newPost.id}: User ID {newPost.userId} </h5>
            <h3>{newPost.title}</h3> <p>{newPost.body}</p>
        </div>
    );
};

export default NewPostComponent;