import React from "react";

import useCount from "../hooks/useCount";
import logo from "../logo.svg";

export default function Home() {
    const [count, { add }] = useCount();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.{" "}
                    <button onClick={add}>Add: </button>
                    {count}
                </p>
            </header>
        </div>
    );
}
