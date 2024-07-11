import React, {FC} from 'react';
import {ITodo} from "../../models/ITodo";
import {Link} from "react-router-dom";

interface IProp {
    todos: ITodo[]
}

const TodosComponent:FC <IProp> = ({todos}) => {

    return (
        <div>
            {
                <ul>
                    {
                        todos.map(todo => <li key={todo.id}>
                            <Link to={todo.id.toString()} state={todo}>{todo.id} {todo.todo}</Link>
                        </li>)
                    }
                </ul>
            }

        </div>
    );
};

export default TodosComponent;