import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import Subtitle from '../../sub-title';
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
		return (
			<div className="container-fluid admin-pane">
				<div className="row">
					<div className="col">
						<Subtitle text="Dashboard" showDate="true"/>
						<div className="card-deck">
							<div className="card text-white bg-info">
								<div className="card-body">
									<h5 className="card-title float-left">{iconMember}</h5>
									<div className="card-text float-right text-center">
										<div className="font-weight-bold huge">45</div>
										Active Members
									</div>
								</div>
							</div>
							<div className="card text-white bg-success ">
								<div className="card-body">
									<h5 className="card-title float-left">{iconVolunteer}</h5>
									<div className="card-text float-right text-center">
										<div className="font-weight-bold huge">6</div>
										Active Volunteers
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PageDashboard;