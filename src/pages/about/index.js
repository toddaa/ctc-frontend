import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Header from '../../sect_header';
import Footer from '../../sect_footer';
import PageHeader from '../../components/page-header';

const iconAbout = (
	<FontAwesomeIcon icon={faInfoCircle} />
);

const pagehead = (
	<PageHeader icon={iconAbout} text="About" />
);

const ContentAbout = () => (
	<section className="about">
		<div className="row">
			<div className="col">
				{pagehead}
				<h5>Crosswalk Teen Center is an innovative nonprofit community youth center that was designed around the interests and needs of teens in the Charlotte area.
					We are located in Charlotte, Michigan and serve teens and families from the surrounding area.
					Our mission is to provide free programs during after-school and unsupervised hours where students can engage in beneficial, educational, and leisure-time activities in a safe environment.
					Crosswalk Teen Center is teaching youth to make positive choices while navigating life's intersections.</h5>
				<h5 className="font-italic">Our programs are offered in four different program areas:</h5>
				<ul>
					<li className="font-weight-bold">Educational Support</li>
					<li className="font-weight-bold">Everyday Life</li>
					<li className="font-weight-bold">Community Connections</li>
					<li className="font-weight-bold">Expressive Arts</li>
				</ul>
				<h5>Crosswalk Teen Center serves students in 7th-12th grade.
					Students can begin attending Crosswalk programs during the summer they are going into 7th grade, and can continue through the summer after they graduate from high school.
					In keeping with our mission to be a safe place for young people, Crosswalk is managed by experienced professionals who are supported by well-trained and pre-screened adult volunteers.
					For the safety of our students, Crosswalk adheres to a very strict "teens only" policy.</h5>
				<h5>Crosswalk is a 501(c)(3) charitable organization offering free programs for students afterschool and during the summer.
					<strong>For more information about our free programs and events for teens, check the calendar on this website.</strong></h5>
			</div>
		</div>
	</section>
);

class AboutPage extends Component {
	render() {
		window.scrollTo(0, 0);
		return (
			<div>
				<Header />
				<div className="container main">
					<ContentAbout />
				</div>
				<Footer />
			</div>
		)
	}
}

export default AboutPage;