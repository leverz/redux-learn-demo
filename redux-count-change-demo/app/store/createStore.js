/**
 * Created by Lever on 16/9/2.
 */
const Redux = require("redux");
const createStore = Redux.createStore;
const changeCount = require("../reducers/reducers");

function configureStore(preloadedState) {
	const store = createStore(changeCount, preloadedState);

	console.log(store);

	// module.hot.accept("../reducers", () => {
	// 	const nextReducer = require("../reducers").default;
	// 	store.replaceReducer(nextReducer);
	// })

	return store;
}

module.exports = configureStore;