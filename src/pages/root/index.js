import React, { Component } from 'react';
import Header from '../../sect_header';
import Footer from '../../sect_footer';
import Carousel from './components/carousel';
import Mission from './components/mission';
import Links from './components/links';

const ContentRoot = () => (
		<section className="welcome">
				<div className="row">
						<div className="col">
							{/* <h3 className="d-none d-sm-block">Welcome</h3> */}
							<Carousel />
							<Mission />
							<Links />
						</div>
				</div>
		</section>
);

class RootPage extends Component {
	render() {
		window.scrollTo(0, 0);
		return (
			<div>
				<Header />
				<div className="container main">
					<ContentRoot />
				</div>
				<Footer />
			</div>
		)
	}
}

export default RootPage;