import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const iconAdd = (
	<FontAwesomeIcon icon={faPlusSquare} />
);

class MemberToolbar extends Component {

	render() {
		return (
			<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
				<div className="btn-group mr-2" role="group" aria-label="Second group">
					<button type="button" className="btn btn-info">{iconAdd} Add Member</button>
				</div>
			</div>
		);
	}
}

export default MemberToolbar;