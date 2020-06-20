import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Home from "./Home";
import Root from "../../Root";

describe("<Home />", () => {
    test("Adding todo works", () => {
        const { getByText, getByPlaceholderText } = render(
            <Root>
                <Home />
            </Root>
        );

        fireEvent.input(getByPlaceholderText("Enter TODO"), {
            target: { value: "Fake TODO" },
        });
        fireEvent.click(getByText(/Add/i));
        expect(getByText(/Fake TODO/i)).toBeInTheDocument();
    });
});
