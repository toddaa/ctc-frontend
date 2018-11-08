import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Header from '../../sect_header';
import Footer from '../../sect_footer';
import FeatureEvent from './components/feature_event';
import Upcoming from './components/upcoming';
import Camps from './components/camps';
import PageHeader from '../../components/page-header';

const iconEvents = (
	<FontAwesomeIcon icon={faCalendarAlt} />
);

const pagehead = (
	<PageHeader icon={iconEvents} text="Events" />
);

const ContentEvents = () => (
	<section className="events">
		<div className="row">
			{pagehead}
			<FeatureEvent />
			<div className="d-flex bd-highlight">
				<Camps />
				<Upcoming />
			</div>
		</div>
	</section>
);

class EventsPage extends Component {
	render() {
		window.scrollTo(0, 0);
		return (
			<div>
				<Header />
				<div className="container main">
					<ContentEvents />
				</div>
				<Footer />
			</div>
		)
	}
}

export default EventsPage;