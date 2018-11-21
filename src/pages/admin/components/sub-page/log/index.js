import React, { Component } from 'react';
import { connect } from 'react-redux';
import Subtitle from '../../sub-title';

class PageLog extends Component {
	constructor(props, context){
		super(props, context);
		console.log(props.logs)
	}

	render() {

		const logRows = this.props.scanlog
		.map(h =>
			<tr key={h.id.toString()}>
				<th scope="row">{h.id}</th>
				<td>{h.timestamp}</td>
				<td>{h.mid}</td>
				<td>{h.entry}</td>
			</tr>
		);

		return (
			<div className="container-fluid admin-pane">
				<div className="row">
					<div className="col">
						<Subtitle text="Log" showDate="false"/>
						<table className="table">
							<thead>
								<tr>
								<th scope="col">ID</th>
								<th scope="col">Timestamp</th>
								<th scope="col">Member ID</th>
								<th scope="col">Location/Activity</th>
								</tr>
							</thead>
							<tbody>
							{logRows}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ scanlog }) => ({
	scanlog,
});

export default connect(mapStateToProps)(PageLog);