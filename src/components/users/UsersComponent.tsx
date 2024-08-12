import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import UserComponent from "../user/UserComponent";
import {Link} from "react-router-dom";
interface IProps {
    users: IUser[]
}

const UsersComponent: FC<IProps> = ({users}) => {
    return (
        <ul>
            {
                users.map((user) => (<li key={user.id}>
                    <Link to={'/users/' + user.id}>
                        <UserComponent user={user}/>
                    </Link>
                </li>))
            }
        </ul>
    );
};

export default UsersComponent;