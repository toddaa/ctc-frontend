import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import Author from '../components/author';
import './footer.css';


import CTC_logo from './Crosswalk-BlackwithDrop.png';

const iconCopyright = (
	<FontAwesomeIcon icon={faCopyright} />
);
const iconEnvelope = (
	<FontAwesomeIcon icon={faEnvelope} />
);

const iconFacebook = (
	<FontAwesomeIcon icon={faFacebookSquare} />
);

const Footer = () => (
	<footer>
		<div className="container">
			<img className="d-none d-sm-block" src={CTC_logo} alt="Crosswalk Teen Center" width="300" />
			<h2 className="d-none d-sm-block">Crosswalk Teen Center | Charlotte, Michigan</h2>
			<p className="d-none d-sm-block">{iconCopyright} Copyright 2013 | Crosswalk Teen Center | All Rights Reserved</p>
			<p className="d-none d-sm-block"><a href="mailto:info@crosswalkteencenter.org">{iconEnvelope} info@crosswalkteencenter.org</a> | <a href="http://facebook.com/crosswalkteencenter">{iconFacebook} @crosswalkteencenter</a></p>
			<Author/>
		</div>
	</footer>
);

export default Footer;