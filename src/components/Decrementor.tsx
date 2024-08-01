import React from 'react';
import {useAppContext} from "../App";

const Decrementor = () => {
    let {dec} = useAppContext()

    return (
        <div>
            <button onClick={dec}>dec</button>
        </div>
    );
};

export default Decrementor;