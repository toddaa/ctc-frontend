import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import Subtitle from '../../sub-title';
import DashCard from '../../../components/dash-card-sm';
import DashView from '../../../components/dash-view';
import Status from '../../../components/dash-status';
import './dashboard.css';

const iconMember = (
	<FontAwesomeIcon icon={faUserAstronaut} className="fa-4x" />
);

const iconVolunteer = (
	<FontAwesomeIcon icon={faUserNinja} className="fa-4x" />
);

/*const iconParent = (
	<FontAwesomeIcon icon={faUserTie} className="fa-4x" />
);*/

class PageDashboard extends Component {
	render() {
		let statsData = [
			{
				title: "Total Members",
				value: 100
			},
			{
				title: "Total Checkin Points",
				value: 9
			},
			{
				title: "Top Checkin Point",
				value: "Front Door"
			}
		]

		return (
			<div className="container-fluid admin-pane">
				<div className="row">
					<div className="col">
						<Subtitle text="Dashboard" showDate="true"/>
						<Status type="warning" message="Missing data has been found.  Please manage your members."/>
					</div>
				</div>
				<div className="row">
					<div className="col-8">
						<DashView name="Statistics" data={statsData}/>
					</div>
					<div className="col"> 
						<div className="card-deck">
							<DashCard icon={iconMember} value='45' name='Active Members' colorclass='bg-info' />
							<DashCard icon={iconVolunteer} value='6' name='Active Volunteers' colorclass='bg-success' />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PageDashboard;