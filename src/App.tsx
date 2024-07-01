import React, { useState} from 'react';
import './App.css';
import {useToggle} from "./hooks/useToggle";
import {useToggleValue} from "./hooks/useToggleValue";
import {usePrevious} from "./hooks/usePrevious";


function App() {

    const [status, dispatch, toggle] = useToggle();
    const [toggledValue, toggled] = useToggleValue();

    const [text, setText] = useState<string>('');
    const previousText = usePrevious(text);


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

            <div>
                <h3>current text - {text}</h3>
                <h3>previous text - {previousText}</h3>
                <button onClick={() => {
                    setText(text + 'meow:3 ')
                    console.log(previousText);
                }}>
                    kitten push
                </button>
            </div>


        </div>
    );
}

export default App;
