import React, { Component } from 'react';
import { connect } from 'react-redux';
import Subtitle from '../../sub-title';

class PageLog extends Component {
	constructor(props, context){
		super(props, context);
		console.log(props.logs)
	}

	render() {

		// const logRows = this.props.logs
		// .map(h =>
		
		// 	<tr>
		// 		<th scope="row">h.id</th>
		// 		<td>h.timestamp</td>
		// 	</tr>
		// );

		return (
			<div className="container-fluid admin-pane">
				<div className="row">
					<div className="col">
						<Subtitle text="Log" showDate="false"/>
						<table className="table">
							<thead>
								<tr>
								<th scope="col">#</th>
								<th scope="col">First</th>
								<th scope="col">Last</th>
								<th scope="col">Handle</th>
								</tr>
							</thead>
							<tbody>
							{/* {characters.map(c =>
        <li
          key={c.name}
        >
          {c.name}
        </li>
      )} */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ logs }) => ({
	logs,
});

export default connect(mapStateToProps)(PageLog);