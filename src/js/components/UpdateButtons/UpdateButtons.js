import React from "react";

function UpdateButtons(props) {
	return <span id="progressbar-buttons" data-testid="progressbar-buttons">
		{
			props.buttons.map(
				(button, i) => <button key={i} value={button} onClick={props.buttonClick}>{button}</button>
			)
		}
	</span>;
}

export default UpdateButtons;