import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello {this.props.name}</h1>
			</div>
		)
	}
}

ReactDOM.render(<Hello name="Lenny" />, document.getElementById("app"));