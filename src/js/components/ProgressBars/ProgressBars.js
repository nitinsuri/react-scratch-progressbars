import React from 'react';

const ProgressBars = props => <ul id="progressbars">
	{
		props.progressBars.map(
			(progressBar, i) => {
				return <li key={i} className={props.overLimitBars.includes(i) ? "over-limit": ""}>
					<span
						key={progressBar}
						style={{ width: progressBar + '%' }} >
						<span className="display">{progressBar + "%"}</span>
					</span>
				</li>
			}
		)
	}
</ul>;

export default ProgressBars;