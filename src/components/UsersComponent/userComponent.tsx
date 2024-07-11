import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

interface IProp {
    user: IUser
}

const UserComponent:FC<IProp> = ({user}) => {
    return (
        <div>
            {user.id} {user.firstName} {user.lastName} - {user.gender}
        </div>
    );
};

export default UserComponent;