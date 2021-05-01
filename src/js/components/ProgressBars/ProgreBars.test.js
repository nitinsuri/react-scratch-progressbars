import React from "react";
import ProgressBars from "./ProgressBars";
import {render, getByTestId} from "@testing-library/react";

describe("ProgressBars", ()=>{
    it('should create a snapshot of ProgressBars', () => {
        const props = {
            progressBars: [
                40, 50, 60, 47
            ],
            overLimitBars: [0]
        }
        const {container} = render(<ProgressBars {...props}></ProgressBars>);
        const progressbarsContainer = getByTestId(container, "progressbars");

        expect(progressbarsContainer).toBeInTheDocument();
    });
});