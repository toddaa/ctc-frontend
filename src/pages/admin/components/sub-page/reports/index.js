import React, { Component } from 'react';
import Subtitle from '../../sub-title';

class PageReports extends Component {
	render() {
		return (
			<div className="container-fluid admin-pane">
				<div className="row">
					<div className="col">
						<Subtitle text="Reports" showDate="false"/>
					<h4>Crosswalk Admin.</h4>
				</div>
			</div>
		</div>
		)
	}
}

export default PageReports;