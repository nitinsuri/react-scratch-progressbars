import React from "react";
import UpdateButtons from "./UpdateButtons";
import {render, getByTestId} from "@testing-library/react";

describe("UpdateButtons", ()=>{
    it('should create a snapshot of buttons', () => {
        const props = {
            buttons: [
                40, 50
            ]
        }
        const {container} = render(<UpdateButtons {...props}></UpdateButtons>);
        const buttonsContainer = getByTestId(container, "progressbar-buttons");

        expect(buttonsContainer).toBeInTheDocument();
    });
})