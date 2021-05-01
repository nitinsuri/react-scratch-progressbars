import React from "react";
import ProgressBarSelector from "./ProgressBarSelector";
import {render, getByTestId} from "@testing-library/react";

describe("ProgressBarSelector", ()=>{
    it('should create a snapshot of progressbar selector', () => {
        const props = {
            options: [
                40, 50 , 60, 70
            ]
        }
        const {container} = render(<ProgressBarSelector {...props}></ProgressBarSelector>);
        const progressBarSelect = getByTestId(container, "progressbar-selector");

        expect(progressBarSelect).toBeInTheDocument();
    });
})