
import React from 'react';
import './page-head.css';

const PageHeader = (props) => (
	<h3 className="d-none d-sm-block page-head">{props.icon} {props.text}</h3>
);

export default PageHeader;

