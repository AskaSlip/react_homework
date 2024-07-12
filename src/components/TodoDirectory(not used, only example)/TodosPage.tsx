import React, {useEffect, useState} from 'react';
import {ITodo} from "./ITodo";
import TodosComponent from "./TodoComponent/TodosComponent";
import {Outlet, useSearchParams} from "react-router-dom";
import PaginationComponent from "../PaginationComponent/PaginationComponent";

const TodosPage = () => {


    let [searchParams] = useSearchParams()
    let page = searchParams.get('page');

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        let skip;
        if (page) {
            skip = (+page * 30 - 30);

            fetch('https://dummyjson.com/todos?skip=' + skip)
                .then(value => value.json())
                .then(value => {
                    setTodos(value.todos);
                });

        } else {
            fetch('https://dummyjson.com/todos')
                .then(value => value.json())
                .then(value => {
                    setTodos(value.todos);

                })
        }

    })



    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <TodosComponent todos={todos}/>
            <PaginationComponent/>
        </div>
    );
};

export default TodosPage;