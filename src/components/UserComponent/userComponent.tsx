import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import styles from './UserComponent.module.css'

interface IProp {
    user: IUser
}

const UserComponent:FC<IProp> = ({user}) => {
    return (
        <div className={styles.user}>
            {user.id} {user.firstName} {user.lastName} - {user.gender}
        </div>
    );
};

export default UserComponent;