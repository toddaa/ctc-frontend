import { combineReducers } from 'redux';
import scanlog from './scanlog';
import members from './members';
import member from './member';

export default combineReducers({
	scanlog,
	members,
	member
});