import { SET_MEMBER_DATA } from './actions';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_MEMBER_DATA:
			return action.profile;
		default:
			return state;
	}
};