import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const iconSearch = (
	<FontAwesomeIcon icon={faSearch} />
);

class MemberSearch extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			input: ''
		};
	}

	handleChange(e) {
		this.setState({ input: e.target.value });
	};

	handleClick() {
		//console.log(this.state.input);
		//this.props.filterMembers(this.state.input)
	};

	render() {
		return (
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Member Search" aria-label="Member Search" aria-describedby="button-addon" onChange={ this.handleChange }/>
				<div className="input-group-append">
					<button className="btn btn-info" type="button" id="button-addon" onClick={this.handleClick}>{iconSearch} Search</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ members }) => ({
	members,
});

export default connect(mapStateToProps)(MemberSearch);