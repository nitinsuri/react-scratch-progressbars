import React, { Component } from "react";
import axios from "axios";
import ProductListing from "./components/ProductListing/ProductListing";
import MessageBox from "./components/MessageBox/MessageBox";
import SelectBox from "./components/SelectBox/SelectBox";

//const store = createStore(() => [],{},applyMiddleware());
class App extends Component {
	constructor() {
		super();

		this.state = {
			products: [],
			serviceError: false,
			selectedSize: "",
			initial_state: this.products
		};
		this.handleChange = this.handleChange.bind(this);
		this.getSizes = this.getSizes.bind(this);
	}

	componentDidMount() {
		axios
			.get(
				`https://gist.githubusercontent.com/nitinsuri/369461bf222c6a0267d156d822359a4c/raw/ec8f5b2b2af66dc2beba5eb827ca1c9021c371f3/products.json`
			)
			.then(
				res => {
					const products = res.data;
					this.setState({ products });
					this.getSizes();
					this.setState({ INITIAL_STATE: products });
				},
				error => {
					this.setState({ serviceError: true });
				}
			);
	}
	componentDidUpdate() {
		console.log(this.state.products);
	}

	getSizes() {
		const sizeChartMap = [
			"XXS",
			"XXS",
			"XS",
			"S",
			"M",
			"L",
			"XL",
			"XXL",
			"XXXL",
			"XXXXL",
			"XXXXXL"
		];
		let uniqueSizesArray = [];
		this.state.products.forEach(
			product =>
				(uniqueSizesArray = [...uniqueSizesArray, ...product.size])
		);
		uniqueSizesArray = [...new Set([...uniqueSizesArray])];
		const serialisedSizesArray = sizeChartMap.filter(element =>
			uniqueSizesArray.includes(element)
		);
		return serialisedSizesArray;
	}

	handleChange(e) {
		const { value } = e.target,
			products = this.state.INITIAL_STATE;
		if (value === "-1") {
			this.setState({ products: this.state.INITIAL_STATE });
		} else {
			const filteredProducts = products.filter(element =>
				element.size.includes(value)
			);
			this.setState({ products: filteredProducts });
		}
	}

	render() {
		return (
			<main id="app-wrapper">
				<div id="section-header">
					<h2>Women's tops</h2>
					<SelectBox
						onChange={this.handleChange}
						options={this.getSizes()}
						usedFor="sizeFilter"
					/>
				</div>
				{this.state.serviceError ? (
					<MessageBox
						status={"error"}
						message={"Error messaage!"}
					/>
				) : (
					<ProductListing products={this.state.products} />
				)}
			</main>
		);
	}
}

export default App;