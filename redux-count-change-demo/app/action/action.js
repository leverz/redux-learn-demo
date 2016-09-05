/**
 * Created by Lever on 16/9/2.
 */

// action
const ADD_COUNT = "ADD_COUNT";
const MINUS_COUNT = "MINUS_COUNT";
const COUNT = "COUNT";

function addCount (count) {
	return {
		type: ADD_COUNT,
		count: count
	}
}

// action factory
function minusCount(count) {
	return {
		type: MINUS_COUNT,
		count: count
	}
}

function getCount (count) {
	return {
		type: COUNT,
		count:count
	}
}

module.exports = {
	ADD_COUNT,
	MINUS_COUNT,
	COUNT,
	addCount,
	minusCount,
	getCount
}