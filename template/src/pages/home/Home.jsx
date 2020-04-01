import React from "react";

import useCount from "../../hooks/useCount";
import useTheme from "../../hooks/useTheme";
import logo from "../../logo.svg";

export default function Home() {
    const [count, { increment }] = useCount();
    const [, { toggleTheme }] = useTheme();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.{" "}
                    <button type="button" className="btn" onClick={increment}>
                        Add:{" "}
                    </button>
                    {count}
                </p>
                <div>
                    <button type="button" onClick={toggleTheme}>
                        Toggle Theme
                    </button>
                </div>
            </header>
        </div>
    );
}
