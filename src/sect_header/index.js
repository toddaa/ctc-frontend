import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import './header.css';

import CTC_logo from './Crosswalk-BlackwithDrop.png';

const iconKey = (
	<FontAwesomeIcon icon={faKey} />
);

class Header extends Component {
	render() {
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
								<NavLink className="nav-link" to='/admin' exact>
									<span className="d-none d-md-block">{iconKey}</span>
									<span className="d-block d-md-none">Admin</span>
								</NavLink >
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}

export default Header;