import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate, faPalette, faRobot, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './links.css';

const iconDonate = (
	<FontAwesomeIcon icon={faDonate} size={"3x"} />
);

const iconProgram = (
	<FontAwesomeIcon icon={faPalette} size={"3x"} />
);

const iconProject = (
	<FontAwesomeIcon icon={faRobot} size={"3x"} />
);

const iconSponsor = (
	<FontAwesomeIcon icon={faHandsHelping} size={"3x"} />
);

const ButtonDonate = () => (
	<button className="btn btn-primary btn-lg btn-main">{iconDonate} <h3>Donate</h3></button>
);

const ButtonProjects = () => (
	<button className="btn btn-success btn-lg btn-main">{iconProject} <h3>Projects</h3></button>
);

const ButtonPrograms = () => (
	<button className="btn btn-danger btn-lg btn-main">{iconProgram} <h3>Programs</h3></button>
);

const ButtonSponsor = () => (
	<button className="btn btn-info btn-lg btn-main">{iconSponsor} <h3>Sponsor</h3></button>
);

class Links extends Component {
	render() {
		return (
			<section className="links">
			<div className="container">
				<div className="row">
					<ButtonDonate />
					<ButtonProjects />
					<ButtonPrograms />
					<ButtonSponsor />
				</div>
			</div>
		</section>
		)
	}
}

export default Links;