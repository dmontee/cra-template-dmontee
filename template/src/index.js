import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

import "./styles/index.css";

ReactDOM.render(
    <React.StrictMode>
        <Root>
            <App />
        </Root>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
