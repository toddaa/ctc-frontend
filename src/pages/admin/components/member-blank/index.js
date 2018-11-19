import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const iconError = (
	<FontAwesomeIcon icon={faExclamationCircle} className="fa-3x" />
);

const MemberDetailBlank = () => {
	return (
		<div className="memberDetails">
				<Card className="text-center">
					<CardBody>
						<CardTitle>{iconError}</CardTitle>
						<CardText>Please select a member</CardText>
					</CardBody>
				</Card>
			</div>
	);
}

export default MemberDetailBlank;