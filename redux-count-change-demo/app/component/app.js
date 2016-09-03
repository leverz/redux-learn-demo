const React = require("react");
const Component = React.Component;
const Count = require("./count");
class App extends Component {
	render(){
		console.log(this.props);
		return (
			<div>
				<Count count={this.props.count}/>
				<input type="button" value="+" />
				<input type="button" value="-"/>
			</div>
			)
	}
}
module.exports = App;