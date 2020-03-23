import React from "react";
import { Provider } from "react-redux";

import store from "./index";

export default function Store({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
