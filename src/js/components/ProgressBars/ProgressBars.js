import React from 'react';

const ProgressBars = props => <ul id="progressbars">
	{
		props.progressBars.map(
			(progressBar, i) => <li key={i}>
				<span
					key={progressBar}
					style={{ width: progressBar + '%' }}>
					{progressBar + "%"}
				</span>
			</li>)
	}
</ul>;

export default ProgressBars;