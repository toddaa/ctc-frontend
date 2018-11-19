//import { API_URL } from '../../constants';

export const SET_CURRENT_MEMBER = 'SET_CURRENT_MEMBER';

export function setCurrentMember(id) {
	return {
		type: SET_CURRENT_MEMBER,
		id,
	};
}

export function getMemberData(id) {
	return dispatch =>
		//fetch(`${API_URL}/people/${id}`)
		fetch(`/ctc.json`)
			.then(res => res.json())
			.then(profile => {
				dispatch(setMemberData(profile.filter(profile => profile.id === id)[0]));
	});
}

export const SET_MEMBER_DATA = 'SET_MEMBER_DATA';

export function setMemberData(profile) {
	return {
		type: SET_MEMBER_DATA,
		profile,
	};
}