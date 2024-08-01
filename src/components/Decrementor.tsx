import React from 'react';
import {useStore} from "../store/store";

const Decrementor = () => {

    let {dec} = useStore()

    return (
        <div>
            <button onClick={dec}>dec</button>
        </div>
    );
};

export default Decrementor;