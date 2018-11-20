//import { API_URL } from '../../constants';

export const SET_SCANLOG = 'SET_SCANLOG';

export function getScanlog() {
	return dispatch =>
		//fetch(`${API_URL}/people`)
		fetch('/scan_log.json')
		.then(res => res.json())
		//.then(res => res.results)
		.then(logs =>
			dispatch(setScanlog(logs))
		);
}

export function setScanlog(logs) {
	return {
		type: SET_SCANLOG,
		logs,
	};
}