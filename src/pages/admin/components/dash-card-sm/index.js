import React, { Component } from 'react';

class DashCard extends Component {

	render(){
        //console.log(this.props.colorclass)
		return (
			<div className={"card text-white " + this.props.colorclass}>
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