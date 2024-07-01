// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
// import { useState } from "react"

import {useReducer, useState} from "react";


export const useToggle = () => {
    const [valueStatus, setValueStatus] = useState<boolean>(false)


    const reducer = (
        state: boolean,
        action: { type: string, payload: boolean }
    ) => {
        switch (action.type) {
            case 'in':
                return action.payload;
            case 'out':
                return action.payload;
        }
        return state;
    }

    const [status, dispatch] = useReducer(reducer, valueStatus);

    const toggle = () => {
        setValueStatus((prev) => !prev);
    };

    return [status, dispatch, toggle] as const;


};