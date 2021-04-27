import React, { Component } from "react";

class UpdateButtons extends Component {
	render() {
		return (
			<span id="progressbar-buttons">
				{
					this.props.buttons.map(
						(button, i) => <button key={i} value={button} onClick={this.handleProgressBarUpdate}>{button}</button>
					)
				}
			</span>
		);
	}
}

export default UpdateButtons;