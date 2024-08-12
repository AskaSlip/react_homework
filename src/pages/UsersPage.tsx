import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/store";
import {userAction} from "../redux/slices/UserSlice";
import UsersComponent from "../components/users/UsersComponent";

const UsersPage = () => {

    let dispatch = useAppDispatch()
    let {users, isLoaded, error} = useAppSelector(state => state.userStore)


    useEffect(() => {
        dispatch(userAction.loadUsers())
    }, []);

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;