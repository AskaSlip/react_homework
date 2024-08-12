import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userAction} from "../redux/slices/UserSlice";
import UsersComponent from "../components/users/UsersComponent";

const SortedPage = () => {
    let dispatch = useAppDispatch()

    let users = useAppSelector(state => state.userStore.users)
    useEffect(() => {
        if (users.length){
        let users2 = [...users]
        dispatch(userAction.refillUsers(
            users2.sort((user1,user2) => user2.id - user1.id)
        ))}
    }, []);

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default SortedPage;