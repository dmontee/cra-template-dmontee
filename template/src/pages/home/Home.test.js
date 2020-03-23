import React from "react";
import { render } from "@testing-library/react";

import Store from "../../app/Store";
import Home from "./Home";

describe("<Home />", () => {
    test("Should have add button", () => {
        const { getByText } = render(
            <Store>
                <Home />
            </Store>
        );

        expect(getByText(/Add/i)).toBeInTheDocument();
    });
});
