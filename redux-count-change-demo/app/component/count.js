const React = require("react");
const Component = React.Component;

class Count extends Component {
	render() {
		console.log(this.props);
		return (
			<div></div>
			)
	}
}

module.exports = Count;