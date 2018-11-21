import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, Card, CardBody, CardFooter, CardHeader, CardTitle, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faUserTie, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import DataField from './data-field';
import DataFieldSocial from './data-field-social';
import DataFieldAddr from './data-field-addr';
import DataFieldSubs from './data-field-subs';
import DataFieldAttrs from './data-field-attr';
import Moment from 'moment';
import ScanLog from './scan_log';
import './detail.css';

const iconMember = (
	<FontAwesomeIcon icon={faUserAstronaut} />
);

const iconVolunteer = (
	<FontAwesomeIcon icon={faUserNinja} />
);

const iconParent = (
	<FontAwesomeIcon icon={faUserTie} />
);

const DetMember = (props) => {
	let member = props.data;
	var gender = member.gender==="M"?"Male":"Female";
	return (
		<ul className="list-group list-group-flush">
			<DataField name="Member Type" value={member.type} />
			<DataField name="Gender" value={gender} />
			<DataFieldSocial name="Social Networks" value={member.social_media} />
			<DataFieldAddr name="Address" value={member.address} />
			<DataField name="Email" value={member.contact.email1} />
			<DataField name="Email" value={member.contact.email2} />
			<DataField name="Home Phone" value={member.contact.phone_home} />
			<DataField name="Cell Phone" value={member.contact.phone_cell} />
			<DataField name="Date of Birth" value={Moment(member.dob).format('MMMM D, YYYY')} />
			<DataField name="Nickname" value={member.nickname} />
			<DataField name="School" value={member.edu.school} />
			<DataField name="Graduation Year" value={member.edu.hs_grad_year} />
			<DataFieldSubs name="Subscriptions" value={member.subscriptions} />
			<DataFieldAttrs name="Attributes" value={member.attributes} />
		</ul>
	);
}

const DetVolunteer = (props) => {
	var gender = props.data.gender==="M"?"Male":"Female";
	return (
		<ul className="list-group list-group-flush">
			<DataField name="Member Type" value={props.data.type} />
			<DataField name="Gender" value={gender} />
			<DataFieldSocial name="Social Networks" value={props.data.social_media} />
			<DataFieldAddr name="Address" value={props.data.address} />
			<DataField name="Email" value={props.data.contact.email1} />
			<DataField name="Email" value={props.data.contact.email2} />
			<DataField name="Home Phone" value={props.data.contact.phone_home} />
			<DataField name="Cell Phone" value={props.data.contact.phone_cell} />
			<DataField name="Date of Birth" value={props.data.dob} />
			<DataField name="Nickname" value={props.data.nickname} />
			<DataFieldSubs name="Subscriptions" value={props.data.subscriptions} />
			<DataFieldAttrs name="Attributes" value={props.data.attributes} />
		</ul>
	);
}

const DetParent = (props) => {
	var gender = props.data.gender==="M"?"Male":"Female";
	return (
		<ul className="list-group list-group-flush">
			<DataField name="Member Type" value={props.data.type} />
			<DataField name="Gender" value={gender} />
			<DataFieldSocial name="Social Networks" value={props.data.social_media} />
			<DataFieldAddr name="Address" value={props.data.address} />
			<DataField name="Email" value={props.data.contact.email1} />
			<DataField name="Email" value={props.data.contact.email2} />
			<DataField name="Home Phone" value={props.data.contact.phone_home} />
			<DataField name="Cell Phone" value={props.data.contact.phone_cell} />
			<DataFieldSubs name="Subscriptions" value={props.data.subscriptions} />
			<DataFieldAttrs name="Attributes" value={props.data.attributes} />
		</ul>
	);
}

class MemberProps extends Component {
	constructor(props) {
		super(props);
		//console.log(props.profile)

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			//console.log(tab);
			this.setState({
				activeTab: tab
			});
			//console.log(this.state.activeTab);
		}
	}
	render(){
		//console.log(this.props.profile)
		let member = this.props.profile;
		let memberIcon = null;
		let activeMemberDets = null;
		//console.log(member.parents)

		switch (member.type){
			default:
			case "M":
				memberIcon = iconMember;
				activeMemberDets = <DetMember data={member} />;
			break;
			case "V":
				memberIcon = iconVolunteer;
				activeMemberDets = <DetVolunteer data={member} />;
				if (this.state.activeTab === '2'){
					this.setState({
						activeTab: '1'
					})
				}
				break;
			case "P":
				memberIcon = iconParent;
				activeMemberDets = <DetParent data={member} />;
				if (this.state.activeTab === '2'){
					this.setState({
						activeTab: '1'
					})
				}
				break;
		}

		return (
			<Card>
				<CardHeader>
					<Nav tabs className="card-header-tabs">
						<NavItem>
							<NavLink
							className={classnames({ active: this.state.activeTab === '1' })}
							onClick={() => { this.toggle('1'); }}>Details</NavLink>
						</NavItem>
						{
							member.parents &&
							<NavItem>
								<NavLink
									className={classnames({ active: this.state.activeTab === '2' })}
									onClick={() => { this.toggle('2'); }}>Parent Info</NavLink>
							</NavItem>
						}
						<NavItem>
							<NavLink
							className={classnames({ active: this.state.activeTab === '3' })}
							onClick={() => { this.toggle('3'); }}>Scan Log</NavLink>
						</NavItem>
					</Nav>
				</CardHeader>
				<CardBody>
					<TabContent activeTab={this.state.activeTab}>
						<TabPane tabId="1">
							<CardTitle>{memberIcon} {member.first_name} {member.last_name}</CardTitle>
							{activeMemberDets}
						</TabPane>
                        <TabPane tabId="2">
							<CardTitle>PARENT PAGE</CardTitle>
							PARENT DETAILS
						</TabPane>
                        <ScanLog />
					</TabContent>
				</CardBody>
				<CardFooter className="text-muted">
					Last Scan:
				</CardFooter>
			</Card>
		);
	}
}

const mapStateToProps = ({ member: { profile } }) => ({
	profile,
});


export default connect(mapStateToProps)(MemberProps);