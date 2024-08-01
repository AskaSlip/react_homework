import React from 'react';
import {useAppContext} from "../App";

const Incrementor = () => {

    let {inc} = useAppContext()

    return (
        <div>
            <button onClick={inc}>inc</button>
        </div>
    );
};

export default Incrementor;