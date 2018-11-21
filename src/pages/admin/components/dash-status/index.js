import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faExclamationCircle, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const iconDanger = (
	<FontAwesomeIcon icon={faExclamationCircle} size={"lg"} className="fa-pull-left" />
);
const iconWarning = (
	<FontAwesomeIcon icon={faExclamationTriangle} size={"lg"} className="fa-pull-left" />
);
const iconSuccess = (
	<FontAwesomeIcon icon={faCheckCircle} size={"lg"} className="fa-pull-left" />
);
const iconInfo = (
	<FontAwesomeIcon icon={faInfoCircle} size={"lg"} className="fa-pull-left" />
);

class Status extends Component {

	render(){
		let colorclass = null;
		let icon = null;
		let prefix = null;
		switch (this.props.type){
			case "primary":
				colorclass = "alert-primary";
				break;
			case "secondary":
				colorclass = "alert-secondary";
				break;
			case "success":
				colorclass = "alert-success";
				prefix = "GREAT NEWS";
				icon = iconSuccess;
				break;
			case "danger":
				colorclass = "alert-danger";
				prefix = "WARNING";
				icon = iconDanger;
				break;
			case "warning":
				colorclass = "alert-warning";
				prefix = "NOTE";
				icon = iconWarning;
				break;
			default:
			case "info":
				colorclass = "alert-info";
				icon = iconInfo;
				break;
			case "light":
				colorclass = "alert-light";
				break;
			case "dark":
				colorclass = "alert-dark";
				break; 
		}
		//console.log(this.props.colorclass)
		return (
			<div className={"alert " + colorclass} role="alert">
				<span className="font-weight-bold">{icon} {prefix && prefix +':'} </span>{this.props.message}
			</div>
		);
	}
}


export default (Status);