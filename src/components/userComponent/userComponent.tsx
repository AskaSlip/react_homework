import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProp {
    user: IUser
}

const UserComponent: FC <IProp> = ({user}) => {
    return (
        <div>
            {user.id}: {user.name} - {user.username} - {user.email}
        </div>
    );
};

export default UserComponent;