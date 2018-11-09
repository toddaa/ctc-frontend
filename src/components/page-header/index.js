
import React from 'react';
import './page-head.css';

const PageHeader = (props) => (
	<h3 className="page-head">{props.icon} {props.text}</h3>
);

export default PageHeader;

