import React, { Component } from "react";
import axios from "axios";
import ProgressBars from "./components/ProgressBars/ProgressBars";
import ProgressBarSelector from "./components/ProgressBarSelector/ProgressBarSelector";
import UpdateButtons from "./components/UpdateButtons/UpdateButtons";

//const store = createStore(() => [],{},applyMiddleware());
class App extends Component {
	constructor() {
		super();
		this.state = {
			serviceError: false,
			bars: [],
			buttons: [],
			widthLimit: 0,
			selectedProgressBar: 0,
			appLoaded: false,
			overLimitBars: []
		};
		this.handleProgressBarSelection = this.handleProgressBarSelection.bind(this);
		this.handleUpdateProgressBar = this.handleUpdateProgressBar.bind(this);
	}
	componentDidMount() {
		axios
			.get(
				`https://pb-api.herokuapp.com/bars`
			)
			.then(
				res => {
					const appData = res.data;
					this.setState({
						bars: appData.bars,
						buttons: appData.buttons,
						widthLimit: appData.limit,
						appLoaded: true
					});
				}
			);
	}

	handleProgressBarSelection(e) {
		this.setState({ selectedProgressBar: e.target.value });
	}

	handleUpdateProgressBar(e) {
		const { value } = e.target;
		let selectedProgressBar = parseInt(this.state.selectedProgressBar),
			overLimitBars = [...this.state.overLimitBars];

		let bars = [...this.state.bars];
		let bar = bars[this.state.selectedProgressBar];

		bar = bar + parseInt(value);
		if(bar < 0) {
			bar = 0;
		}

		if (bar > this.state.widthLimit) {
			overLimitBars.push(selectedProgressBar);
			overLimitBars = [...new Set(overLimitBars)];
			this.setState({overLimitBars});
		} else {
			overLimitBars = overLimitBars.filter(bar => bar !== selectedProgressBar);
			this.setState({overLimitBars});
		}

		bars[selectedProgressBar] = bar;
		this.setState({bars});
	}
	componentDidUpdate(){
		console.log("componentDidUpdate: ",this.state);
	}

	render() {
		return (
			<main id="app-wrapper" className={this.state.appLoaded ? "" : "loading"}>
				<div className="width-limit-indicator">Bar width limit: <span>{this.state.widthLimit}</span></div>
				<ProgressBars progressBars={this.state.bars} overLimitBars={this.state.overLimitBars} />
				<div id="controls">
					<ProgressBarSelector
						onChange={this.handleProgressBarSelection}
						usedFor="progressbar-selector"
						options={this.state.bars} />
					<UpdateButtons buttons={this.state.buttons} buttonClick={this.handleUpdateProgressBar.bind(this)} />
				</div>
				<div id="loader"></div>
			</main>
		);
	}
}
export default App;