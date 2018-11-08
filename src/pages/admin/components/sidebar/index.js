import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';
import './sidebar.css';

const iconIdBadge = (
	<FontAwesomeIcon icon={faIdBadge} />
);

const iconLog = (
	<FontAwesomeIcon icon={faStream} />
);

const iconReport = (
	<FontAwesomeIcon icon={faChartPie} />
);

class Sidebar extends Component {
	render() {
		return (
				<nav id="sidebar">
					<div className="sidebar-header">
						<p>ADMIN</p>
					</div>

					<ul className="list-unstyled components">
						{/* <p>Dummy Heading</p> */}
						{/* <li className="active">
							<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
							<ul className="collapse list-unstyled" id="homeSubmenu">
								<li>
									<a href=".">Home 1</a>
								</li>
								<li>
									<a href=".">Home 2</a>
								</li>
								<li>
									<a href=".">Home 3</a>
								</li>
							</ul>
						</li> */}
						<li>
							<NavLink className="nav-link" to='/admin/members' exact>{iconIdBadge} Members</NavLink>
						</li>
						<li>
							<NavLink className="nav-link" to='/admin/reports' exact>{iconReport} Reports</NavLink>
						</li>
						<li>
							<NavLink className="nav-link" to='/admin/logs' exact>{iconLog} Logs</NavLink>
						</li>
					</ul>
				</nav>
		)
	}
}

export default Sidebar;