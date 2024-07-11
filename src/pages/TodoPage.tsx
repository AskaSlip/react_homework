import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {ITodo} from "../models/ITodo";
import {useAppLocation} from "../hooks/useAppLocation";

const TodoPage = () => {

    let {id} = useParams()
    let location = useAppLocation<ITodo>()
    let state = location.state

    const [user, setUser] = useState<any>()
    
    useEffect(() => {
        fetch('https://dummyjson.com/users/' + state.userId)
            .then(value => value.json())
            .then(value => {
                setUser(value);
            })
    }, [state.userId]);


    return (
        <div>
            todoshka {state.id} {state.completed +''}
            {/*{JSON.stringify(user)}*/}
        </div>
    );
};

export default TodoPage;