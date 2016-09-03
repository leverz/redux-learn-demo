const ACTION = require("./app/action/action");
const addCount = ACTION.addCount;
const minusCount = ACTION.minusCount;
const getCount = ACTION.getCount;
const createStore = require("./app/store/createStore");
// console init state
const store = createStore({count: 0});

// when state change, it work
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// run action
store.dispatch(addCount(1));
store.dispatch(minusCount(2));
store.dispatch(getCount(3));

// stop state update
unsubscribe();