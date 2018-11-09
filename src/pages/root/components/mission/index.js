import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import './mission.css';

const iconArrows = (
	<FontAwesomeIcon icon={faAngleDoubleRight} size={"4x"} />
);

class Mission extends Component {
	render() {
		return (
			<section className="mission">
			<div className="container">
				<div className="row">
						<div className="col-1 text-center">
							{iconArrows}
						</div>
						<div className="col-11">
							<h5>The mission of the Crosswalk Teen Center is to provide a safe, enjoyable environment where teenagers can engage in beneficial, educational, and leisure-time activities.
								The Crosswalk Teen Center strives to develop and empower diverse teen leaders who will enrich the community.</h5>
						</div>
				</div>
			</div>
		</section>
		)
	}
}

export default Mission;