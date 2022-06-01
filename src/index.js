import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import isEditable from "./context/context"
import {useState} from "react";

function Main() {
    const [toggle, setToggle] = useState({
        isEditable: true,
    })
    return (
        <isEditable.Provider value={{toggle, setToggle}}>
            <App />
        </isEditable.Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
