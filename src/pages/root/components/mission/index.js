import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './mission.css';

const iconArrows = (
	<FontAwesomeIcon icon={faAngleDoubleRight} size={"4x"} className="fa-pull-left" />
);

class Mission extends Component {
	render() {
		return (
			<section className="mission">
			<div className="container">
				<div className="row">
						<div className="col">
							<h5>{iconArrows}The mission of the Crosswalk Teen Center is to provide a safe, enjoyable environment where teenagers can engage in beneficial, educational, and leisure-time activities.
								The Crosswalk Teen Center strives to develop and empower diverse teen leaders who will enrich the community.</h5>
						</div>
				</div>
			</div>
		</section>
		)
	}
}

export default Mission;