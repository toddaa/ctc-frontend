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
			<div className="col">
				{pagehead}
				<FeatureEvent />
				<div className="d-none d-md-block">
					<div className="d-flex">
						<Camps />
						<Upcoming />
					</div>
				</div>
				<div className="d-block d-md-none">
						<Upcoming />
						<Camps />
				</div>
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