import React, {useEffect,  useRef, useState} from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
import {useToggleValue} from "./hooks/useToggleValue";




function App() {

    const [status, dispatch, toggle] = useToggle();
    const [toggledValue, toggled] = useToggleValue();




    return (
        <div>
            <h2>status: {status ? 'Logged In' : 'Logged Out'}</h2>
            <button onClick={() => {
                dispatch({type: 'in', payload: true})
                toggle();
            }}>
                log in
            </button>
            <button onClick={() => {
                dispatch({type: 'out', payload: false})
                toggle();
            }}>
                log out
            </button>
            <hr/>
            <div>
                <h3>{`changed value: ${toggledValue}`}</h3>
                <button onClick={() => {
                    toggled();
                }}>
                    push
                </button>
            </div>



        </div>
    );
}

export default App;
