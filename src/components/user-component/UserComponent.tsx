import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './UserComponent.module.css'

interface IProps{
    user: IUser;
    getPosts:(id:number)=>void;
}

const UserComponent:FC<IProps> = ({user, getPosts}) => {
    return (
        <div className={styles.userBlock}>
            {user.id} - {user.firstName} {user.lastName}: - {user.email}
            <button onClick={()=>{
                getPosts(user.id)
            }}>show all the posts</button>
        </div>
    );
};

export default UserComponent;