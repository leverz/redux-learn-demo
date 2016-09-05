/**
 * Created by Lever on 16/9/2.
 */
require("babel-polyfill");
const React = require("react");
const ReactDom = require("react-dom");
const render = ReactDom.render;
const reactRedux = require("react-redux");
const Provider = reactRedux.Provider;
const createStore = require("./store/createStore");
const Component = React.Component;
const App = require("./component/app");
// const bindActionCreators = require("redux").bindActionCreators;

const store = createStore({count: 0});
// const actions = bindActionCreators();
class CountDemo extends Component {
	render(){
		console.log(store.getState());
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
};

render(
	<CountDemo />,
	document.getElementById("content")
);