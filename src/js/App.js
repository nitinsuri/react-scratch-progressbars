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
			appLoaded: false
		};
		this.handleProgressBarSelection = this.handleProgressBarSelection.bind(this);
		this.handleProgressBarUpdate = this.handleProgressBarUpdate.bind(this);
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
				},
				error => {
					this.setState({ serviceError: true });
				}
			);
	}

	handleProgressBarSelection(e) {
		const { value } = e.target;
		this.setState({ selectedProgressBar: value });
	}

	handleProgressBarUpdate(e) {
		console.log("handleProgressBarUpdate");
	}

	componentDidUpdate() {
		console.log(this.state.selectedProgressBar);
	}

	render() {
		return (
			<main id="app-wrapper" className={this.state.appLoaded ? "" : "loading"}>
				<ProgressBars progressBars={this.state.bars} />
				<div id="controls">
					<ProgressBarSelector
						onChange={this.handleProgressBarSelection}
						usedFor="progressbar-selector"
						options={this.state.bars} />
					<UpdateButtons buttons={this.state.buttons} onClick={this.handleProgressBarUpdate} />
				</div>
				<div id="loader"></div>
			</main>
		);
	}
}
export default App;