import React from 'react';

function ProgressBarSelector(props) {
	return <select id="progressbar-selector" onChange={props.onChange} data-testid="progressbar-selector">
		{
			props.options.map((option, i) => <option key={option} value={i}>{"Progress bar " + (i + 1)}</option>)
		}
	</select>;
};

export default ProgressBarSelector;