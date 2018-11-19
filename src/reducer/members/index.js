import { SET_MEMBERS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_MEMBERS:
			return action.members;
		default:
			return state;
	}
};