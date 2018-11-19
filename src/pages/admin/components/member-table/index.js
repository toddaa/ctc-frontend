import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import MemberRow from './member-row';
import './member-table.css';

const tableHead = (
	<thead className="thead-dark">
		<tr>
			<th scope="col" className="memTableIcon"></th>
			<th scope="col">First</th>
			<th scope="col">Last</th>
			<th scope="col">Type</th>
			<th scope="col" className="memTableActions"></th>
		</tr>
	</thead>
);

class MemberTable extends Component {
	// constructor(props, context){
	// 	super(props, context);
	// 	//console.log(props.members)
	// }

	render(){
		//console.log(this.props.members)
		const memberRows = this.props.members
		.filter(member => member.type === "M" || member.type === "V")
		.map(h =>
		<MemberRow key={h.id.toString()} member={h} />);

		return (
			<Table striped bordered hover className="rounded">
				{tableHead}
				<tbody>
					{memberRows}
				</tbody>
			</Table>
		);
	}
}

const mapStateToProps = ({ members }) => ({
	members,
});

export default connect(mapStateToProps)(MemberTable);