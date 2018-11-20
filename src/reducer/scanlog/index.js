import { SET_SCANLOG } from './actions';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SCANLOG:
			return action.logs;
		default:
			return state;
	}
};