import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

// const iconFacebook = (
// 	<FontAwesomeIcon icon={faFacebook} />
// );

// const iconTwitter = (
// 	<FontAwesomeIcon icon={faTwitter} />
// );

const DataFieldSocial = (props) => {
	var facebook = props.value.facebook && 'Facebook = ' + props.value.facebook;
	var twitter = props.value.twitter && "Twitter = " + props.value.twitter;
	
	if (props.value.facebook || props.value.twitter){
		return(
			<li className="list-group-item">
				<span className="fieldLabel">{props.name}:</span>
				<div className="fieldContent">
					<span className="font-weight-bold">{facebook}</span>
					<span className="font-weight-bold">{twitter}</span>
				</div>
			</li>
		);
	} else {
		return(
			null
		);
	}
}

export default DataFieldSocial;