import React from "react";
import ReactDOM from "react-dom";
import Hello from './Hello'

const App = () => (
	<Hello name="Lenny" />
)

ReactDOM.render(<App />, document.getElementById("app"));
