import React, { Component } from 'react';
import Header from '../../sect_header';
import Footer from '../../sect_footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../components/page-header';
import './programs.css';

const iconProgram = (
	<FontAwesomeIcon icon={faPalette} />
);

const pagehead = (
	<PageHeader icon={iconProgram} text="Programs" />
);

const ContentPrograms = () => (
	<section className="programs">
		<div className="row">
			<div className="col">
				{pagehead}
				<h4>Although the exact programs will not been defined until we have located a building to house the Teen Center the following is an incomplete list of program ideas and plans:</h4>
			</div>
		</div>
		<div className="row">
				<div className="col">
					<div className="card border-secondary">
						<div className="card-body">
							<h5 className="card-title">Educational Support</h5>
							<p className="card-text">
								<ul>
									<li>Tutoring</li>
									<li>Robotics</li>
									<li>Computer Skills Workshop</li>
									<li>Project Based Science</li>
									<li>STEM Workshop</li>
									<li>Electronics Workshop</li>
									<li>Laser Engraver</li>
								</ul>
							</p>
						</div>
					</div>
					<div className="card border-secondary">
						<div className="card-body">
							<h5 className="card-title">Everyday Life</h5>
							<p className="card-text">
								<ul>
									<li>Cooking Classes</li>
									<li>Lesuire Time Fun</li>
									<li>Youth Minister Connection</li>
									<li>Depression Management</li>
									<li>Community Service</li>
								</ul>
							</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card border-secondary">
						<div className="card-body">
							<h5 className="card-title">Community Connections</h5>
							<p className="card-text">
								<ul>
									<li>Leadership Development</li>
									<li>Community Service Project Design</li>
									<li>Entrepreneurial Business Development</li>
									<li>Community Skills Presentations</li>
								</ul>
							</p>
						</div>
					</div>
					<div className="card border-secondary">
						<div className="card-body">
							<h5 className="card-title">Expressive Arts</h5>
							<p className="card-text">
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
							</p>
						</div>
					</div>
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