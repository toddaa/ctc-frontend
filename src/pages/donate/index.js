import React, { Component } from 'react';
import Header from '../../sect_header';
import Footer from '../../sect_footer';

const ContentDonate = () => (
    <section className="welcome">
        <div className="row">
            <div className="col-md-12">
              <h3 className="d-none d-sm-block">Donate</h3>
              <h4>Donate to Crosswalk.</h4>
            </div>
        </div>
    </section>
);

class DonatePage extends Component {
	render() {
		window.scrollTo(0, 0);
		return (
			<div>
				<Header />
				<div className="container main">
					<ContentDonate />
				</div>
				<Footer />
			</div>
		)
	}
}

export default DonatePage;