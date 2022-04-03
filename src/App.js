import { Component } from "react";
import Content from "./Content";

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Todolist</h1>
				<Content/>
			</div>
		);
	}
}