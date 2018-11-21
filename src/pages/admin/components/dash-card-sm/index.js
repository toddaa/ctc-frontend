import React, { Component } from 'react';

class DashCard extends Component {

	render(){
		let colorclass = null;
		// let icon = null;
		// let prefix = null;
		switch (this.props.type){
			case "primary":
				colorclass = "bg-primary";
				break;
			case "secondary":
				colorclass = "bg-secondary";
				break;
			case "success":
				colorclass = "bg-success";
				// prefix = "GREAT NEWS";
				// icon = iconSuccess;
				break;
			case "danger":
				colorclass = "bg-danger";
				// prefix = "WARNING";
				// icon = iconDanger;
				break;
			case "warning":
				colorclass = "bg-warning";
				// prefix = "NOTE";
				// icon = iconWarning;
				break;
			default:
			case "info":
				colorclass = "bg-info";
				// icon = iconInfo;
				break;
			case "light":
				colorclass = "bg-light";
				break;
			case "dark":
				colorclass = "bg-dark";
				break; 
		}
        //console.log(this.props.colorclass)
		return (
			<div className={"card text-white " + colorclass}>
				<div className="card-body">
					<h5 className="card-title float-left">{this.props.icon}</h5>
					<div className="card-text float-right text-center">
						<div className="font-weight-bold huge">{this.props.value}</div>
						{this.props.name}
					</div>
				</div>
			</div>
		);
	}
}


export default (DashCard);