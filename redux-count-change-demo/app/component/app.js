const React = require("react");
const Component = React.Component;
const Count = require("./count");
const ACTION = require("../action/action");
const connect = require("react-redux").connect;
class App extends Component {
	render(){
		const {dispatch, count} = this.props;
		return (
			<div>
				<Count count={this.props.count}/>
				<input type="button" value="+" onClick={() => {
				dispatch(ACTION.addCount(count))
				}}/>
				<input type="button" value="-" onClick={() => {
				dispatch(ACTION.minusCount(count))
				}} />
			</div>
			);
	}
}
const select = state => {
	return {
		count: state.count
	}
};
module.exports = connect(select)(App);