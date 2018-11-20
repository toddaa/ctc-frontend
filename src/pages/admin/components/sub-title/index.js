
import React from 'react';
import Moment from 'moment';
import './sub-title.css';

const curDate = Moment().format('MMMM D, YYYY');

const Subtitle = (props) => (
    <h3 className="sub-title">{props.icon} {props.text}{props.showDate === 'true' && <span class="badge badge-secondary float-right"><small>{curDate}</small></span>}</h3>
);

export default Subtitle;

