import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEdit, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const iconBars = (
	<FontAwesomeIcon icon={faBars} />
);

const iconEdit = (
	<FontAwesomeIcon icon={faEdit} />
);

const iconDelete = (
	<FontAwesomeIcon icon={faMinusCircle} />
);

class ActionMenu extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.toggle1 = this.toggle1.bind(this);
		this.toggle2 = this.toggle2.bind(this);
		this.state = {
		dropdownOpen: false,
		modal: false,
		modal1: false
		};
	}

	toggle() {
		this.setState({
		dropdownOpen: !this.state.dropdownOpen
		});
	}
	toggle1() {
		this.setState({
		modal: !this.state.modal
		});
	}
	toggle2() {
		this.setState({
		modal1: !this.state.modal1
		});
	}

	render() {
		return (
			<div>

				<Modal isOpen={this.state.modal} toggle1={this.toggle1} className={this.props.className}>
					<ModalHeader toggle={this.toggle1}>Delete Member</ModalHeader>
					<ModalBody>
						Holy Crap!!  Are you sure you know what you're doing?
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={this.toggle1}>Delete</Button>
						<Button color="secondary" onClick={this.toggle1}>Cancel</Button>
					</ModalFooter>
				</Modal>

				<Modal isOpen={this.state.modal1} toggle2={this.toggle2} className={this.props.className}>
					<ModalHeader toggle={this.toggle2}>Edit Member</ModalHeader>
					<ModalBody>
						Edit Member
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle2}>Save</Button>
						<Button color="secondary" onClick={this.toggle2}>Cancel</Button>
					</ModalFooter>
				</Modal>

				<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle caret size="sm">
					{iconBars}
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem className="btn-danger" onClick={this.toggle1}>{iconDelete} Delete</DropdownItem>
						<DropdownItem onClick={this.toggle2}>{iconEdit} Edit</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>


			</div>
		);
	}
}

export default ActionMenu;