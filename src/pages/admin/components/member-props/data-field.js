import React from 'react';

const DataField = (props) => {
	if (props.value !== undefined){
		return(
			<li className="list-group-item">
				<span className="fieldLabel">{props.name}:</span>
				<div className="fieldContent">
					<span className="font-weight-bold">{props.value}</span>
				</div>
			</li>
		);
	} else {
		return(
			null
		);
	}
}

export default DataField;