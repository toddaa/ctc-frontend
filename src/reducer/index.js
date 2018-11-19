import { combineReducers } from 'redux';
import members from './members';
import member from './member';

export default combineReducers({
	members,
	member
});