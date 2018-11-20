import React, { Component } from 'react';
import { connect } from 'react-redux';
import isEmptyObject from 'is-empty-object';
import MemberTable from '../../member-table';
import MemberProps from '../../member-props';
import MemberDetailBlank from '../../member-blank';
import MemberToolbar from './toolbar';
import MemberSearch from './search';

class PageMembers extends Component {

	render() {
		return (
			<div className="container-fluid admin-pane">
				<div className="row">
					<div className="col-4">
						<MemberSearch/>
						<MemberTable />
						<MemberToolbar />
					</div>
					<div className="col justify-content-center">
						{isEmptyObject(this.props.profile) ? <MemberDetailBlank/> : <MemberProps/>}
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps = ({ member: { profile } }) => ({
	profile,
});
export default connect(mapStateToProps)(PageMembers);
