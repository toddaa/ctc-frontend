import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentMember, getMemberData } from '../../../../reducer/member/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faUserTie, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import ActionMenu from './action-menu';

const iconMember = (
	<FontAwesomeIcon icon={faUserAstronaut} className="fa-lg" />
);

const iconVolunteer = (
	<FontAwesomeIcon icon={faUserNinja} className="fa-lg" />
);

const iconParent = (
	<FontAwesomeIcon icon={faUserTie} className="fa-lg" />
);

class MemberRow extends Component {
	render(){
		let memberIcon = null;
		if (this.props.member.type === "M")
			memberIcon = iconMember;
		if (this.props.member.type === "V")
			memberIcon = iconVolunteer;
		if (this.props.member.type === "P")
			memberIcon = iconParent;

		return (
			<tr onClick={this.props.setMember(this.props.member.id)}>
				<td>{memberIcon}</td>
				<td>{this.props.member.first_name}</td>
				<td>{this.props.member.last_name}</td>
				<td>{this.props.member.type}</td>
				<td><ActionMenu /></td>
			</tr>
		);
	}
}

const mapStateToProps = ({ members }) => ({
	members,
});

const mapDispatchToProps = dispatch => ({
	setMember(id) {
		return () => {
			dispatch(setCurrentMember(id));
			dispatch(getMemberData(id));
		};
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberRow);