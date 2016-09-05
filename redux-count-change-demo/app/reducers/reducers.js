/**
 * Created by Lever on 16/9/2.
 */

const ACTION = require("../action/action");
const ADD_COUNT = ACTION.ADD_COUNT;
const MINUS_COUNT = ACTION.MINUS_COUNT;
const COUNT = ACTION.COUNT;

function changeCount(state, action) {
	switch (action.type) {
		case ADD_COUNT:
			return {...state, count: ++action.count};
		case MINUS_COUNT:
			if (action.count === 0) {
				return state;
			}
			return {...state, count: --action.count};
		default:
			return state;
	}
} 

module.exports = changeCount;