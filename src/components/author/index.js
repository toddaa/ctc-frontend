
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCoffee, faBeer } from '@fortawesome/free-solid-svg-icons';
import './author.css';

const iconHeart = (
	<FontAwesomeIcon icon={faHeart} />
);

const iconCoffee = (
	<FontAwesomeIcon icon={faCoffee} />
);

const iconBeer = (
	<FontAwesomeIcon icon={faBeer} />
);

const About = () => (
	<p className="about">Made with {iconHeart} + {iconCoffee} + {iconBeer} by <a href='https://twitter.com/toddaa'>Aaron Todd</a></p>
);

export default About;

