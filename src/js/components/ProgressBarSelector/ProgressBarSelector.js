import React from 'react';

const ProgressBarSelector = props => <select id={props.usedFor} onChange={props.onChange}>
	{
		props.options.map((option, i) => <option key={i} value={i}>{"Progress bar " + (i + 1)}</option>)
	}
</select>;

export default ProgressBarSelector;