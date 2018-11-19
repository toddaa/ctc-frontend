//import { API_URL } from '../../constants';

export const SET_MEMBERS = 'SET_MEMBERS';

export function getMembers(terms) {
	return dispatch =>
		//fetch(`${API_URL}/people`)
		fetch('/ctc.json')
		.then(res => res.json())
		//.then(res => res.results)
		.then(members =>
			dispatch(setMembers(members))
		);
}

export function setMembers(members) {
	return {
		type: SET_MEMBERS,
		members,
	};
}