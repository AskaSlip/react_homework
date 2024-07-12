import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import UserComponent from "../UserComponent/userComponent";
import styles from './UsersComponent.module.css'

interface IProp{
    users: IUser[]
}

const UsersComponent:FC<IProp> = ({users}) => {


    return (
        <div className={styles.usersWrap}>
            {users.map(user => (
                <UserComponent
                    key={user.id}
                    user={user}/>

            ))
            }
        </div>
    );
};

export default UsersComponent;