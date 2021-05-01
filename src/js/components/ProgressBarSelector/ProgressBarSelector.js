import React from 'react';

function ProgressBarSelector(props) {
	return <select id="progressbar-selector" onChange={props.onChange} data-testid="progressbar-selector">
		{
			props.options.map((i) => <option key={i} value={i}>{"Progress bar " + (i + 1)}</option>)
		}
	</select>;
};

export default ProgressBarSelector;