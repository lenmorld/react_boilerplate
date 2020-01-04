import React, { Component } from "react";
import ReactDOM from "react-dom";

const styles = {
	margin: '1rem',
};

class App extends Component {
	render() {
		return <div style={styles}>React: Hello World!</div>;
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
