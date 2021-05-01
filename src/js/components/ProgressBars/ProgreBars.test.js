import {render, getByTestId} from "@testing-library/react";
import React from "react";
import ProgressBars from "./ProgressBars";

describe("ProgressBars", ()=>{
    it('should create a snapshot of ProgressBars', () => {
        const props = {
            progressbars: [
                40, 50, 60, 47
            ]
        }
        const {container} = render(<ProgressBars {...props}></ProgressBars>);
        const progressbarsContainer = getByTestId(container, "progressbars");

        expect(progressbarsContainer).toBeInTheDocument();
    });
});