import React, { Component } from 'react';
import Header from '../../sect_header';
import Footer from '../../sect_footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../components/page-header';

const iconProgram = (
	<FontAwesomeIcon icon={faPalette} />
);

const pagehead = (
	<PageHeader icon={iconProgram} text="Programs" />
);

const ContentPrograms = () => (
	<section className="programs">
		<div className="row">
			{pagehead}
				<h4 className="d-none d-sm-block">Although the exact programs will not been defined until we have located a building to house the Teen Center the following is an incomplete list of program ideas and plans:</h4>
				<div className="col">
					<p className="font-weight-bold">Educational Support</p>
					<ul>
						<li>Tutoring</li>
						<li>Robotics</li>
						<li>Computer Skills Workshop</li>
						<li>Project Based Science</li>
						<li>STEM Workshop</li>
						<li>Electronics Workshop</li>
						<li>Laser Engraver</li>
					</ul>
					<p className="font-weight-bold">Everyday Life</p>
					<ul>
						<li>Cooking Classes</li>
						<li>Lesuire Time Fun</li>
						<li>Youth Minister Connection</li>
						<li>Depression Management</li>
						<li>Community Service</li>
					</ul>
				</div>
				<div className="col">
					<p className="font-weight-bold">Community Connections</p>
					<ul>
						<li>Leadership Development</li>
						<li>Community Service Project Design</li>
						<li>Entrepreneurial Business Development</li>
						<li>Community Skills Presentations</li>
					</ul>
					<p className="font-weight-bold">Expressive Arts</p>
					<ul>
						<li>Video Production</li>
						<li>Internet Radio Station</li>
						<li>Open Mic Concerts</li>
						<li>Music Exploration</li>
						<li>Creative Writing</li>
						<li>Painting</li>
						<li>Drawing</li>
						<li>Clay Hand-work</li>
						<li>Clay Pottery Wheel</li>
						<li>Mixed Media</li>
						<li>Digital Graphics with Laser Engraver Output</li>
					</ul>
				</div>
		</div>
	</section>
);

class ProgramsPage extends Component {
	render() {
		window.scrollTo(0, 0);
		return (
			<div>
				<Header />
				<div className="container main">
					<ContentPrograms />
				</div>
				<Footer />
			</div>
		)
	}
}

export default ProgramsPage;