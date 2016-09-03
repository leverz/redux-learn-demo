/**
 * Created by Lever on 16/9/2.
 */

const combineReducers = require("redux");
const ACTION = require("../action/action");
const ADD_COUNT = ACTION.ADD_COUNT;
const MINUS_COUNT = ACTION.MINUS_COUNT;
const COUNT = ACTION.COUNT;

function changeCount(state = COUNT.count, action) {
	switch (action.type) {
		case ADD_COUNT:
			return ++action.count;
		case MINUS_COUNT:
			return --action.count;
		default:
			return state;
	}
} 

module.exports = changeCount;