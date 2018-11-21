import React, { Component } from 'react';

class DashView extends Component {

	render(){
        //console.log(this.props.data)

        const rows = this.props.data
		.map(h =>
            <li key={Math.random()} className="list-group-item">
                <div className="row">
                    <label className="col-sm-3">{h.title}</label>
                    <div className="col">
                    {h.value}
                    </div>
                </div>
            </li>
        );
        
		return (
            <div className="card bg-info">
                <div className="card-header text-white font-weight-bold">{this.props.name}</div>
                <ul className="list-group list-group-flush">
                    {rows}
                </ul>
            </div>
		);
	}
}


export default (DashView);