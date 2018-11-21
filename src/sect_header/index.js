import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import auth0Client from '../auth';
import './header.css';

import CTC_logo from './Crosswalk-BlackwithDrop.png';

const iconKey = (
	<FontAwesomeIcon icon={faKey} />
);
const iconLogOut = (
	<FontAwesomeIcon icon={faSignOutAlt} />
);

class Header extends Component {
	render() {
		const signOut = () => {
			auth0Client.signOut();
			this.props.history.replace('/');
		};
		return (
			<header>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-ctc">
					<a className="navbar-brand" href="."><img src={CTC_logo} alt="Crosswalk Teen Center" width="150" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<NavLink className="nav-link" to='/' exact>Home</NavLink >
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to='/about' exact>About</NavLink >
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to='/programs' exact>Programs</NavLink >
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to='/events' exact>Events</NavLink >
							</li>
							<li className="nav-item">
								<a className="nav-link" href="https://crosswalkteencenter.networkforgood.com/projects/57322-sponsor-a-teen">Donate</a>
							</li>
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								{
									!auth0Client.isAuthenticated() &&
									<NavLink className="nav-link" to='/' exact aria-label="Admin" onClick={auth0Client.signIn}>
										<span className="d-none d-md-block">{iconKey}</span>
										<span className="d-block d-md-none">Admin</span>
									</NavLink >
								}
								{
									auth0Client.isAuthenticated() &&
									<NavLink className="nav-link" to='/' exact aria-label="Logout" onClick={() => {signOut()}}>
										<label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
										<span className="d-none d-md-block">{iconLogOut}</span>
										<span className="d-block d-md-none">Logout</span>
									</NavLink >
								}
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}

export default withRouter(Header);