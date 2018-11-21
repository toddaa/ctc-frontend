import React, { Component } from 'react';
import './carousel.css';

const SlideEduSupport = () => (
	<div className="carousel-item active animated slideInRight">
		EDUCATIONAL SUPPORT
		<div className="jumbotron text-white">
			<h1 className="display-4">Educational Support</h1>
			<p className="lead">From afterschool tutoring to project-based STEM programs (Science, TEchnology, Engineering, Math), Crosswalk Teen Center will reinforce the educational system with support and encouragement for teens.  We guide students into becoming increasingly more future-focused through college and career preparation programs and educational planning.</p>
		</div>
	</div>
);

const SlideLife = () => (
	<div className="carousel-item animated slideInRight">
		EVERYDAY LIFE
		<div className="jumbotron text-white">
			<h1 className="display-4">Everyday Life</h1>
			<p className="lead">Little moments each day shape us into who we are.  Life skills programs provides opportunity for students to grow everyday in little ways - mentally, emotionally, spiritually, and physically.  Programs include making healthy choices, cooking, peer support, and social events to name a few.  We help teens develop in practical living skills in fun and relational ways.</p>
		</div>
	</div>
);

const SlideConnections = () => (
	<div className="carousel-item animated slideInRight">
		COMMUNITY CONNECTIONS
		<div className="jumbotron text-white">
			<h1 className="display-4">Community Connections</h1>
			<p className="lead">Crosswalk Teen CEnter believes students dont just live in a community, but they are part of a community.  Teen committees organize and carry out a wide variety of commuinity projects and partner with local organizations to make our community better.</p>
		</div>
	</div>
);

const SlideArts= () => (
	<div className="carousel-item animated slideInRight">
		EXPRESSIVE ARTS
		<div className="jumbotron text-white">
			<h1 className="display-4">Expressive Arts</h1>
			<p className="lead">Crosswalk Teen Center believes students need to espress themselves and use their innate passion and creativity for the good of themselves and the community.  Expressive Art programs are designed for teens to learn and explore various outlets - painting, music, drama, writing, and video production are just a few of the art forms that students may try.</p>
		</div>
	</div>
);

const  CarouselIndicators= () => (
	<ol className="carousel-indicators">
		<li data-target="#carousel" data-slide-to="0" className="active"></li>
		<li data-target="#carousel" data-slide-to="1"></li>
		<li data-target="#carousel" data-slide-to="2"></li>
		<li data-target="#carousel" data-slide-to="3"></li>
	</ol>
);
const  CarouselControlPrevious = () => (
	<a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
		<span className="carousel-control-prev-icon" aria-hidden="true"></span>
		<span className="sr-only">Previous</span>
	</a>
);
const  CarouselControlNext = () => (
	<a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
		<span className="carousel-control-next-icon" aria-hidden="true"></span>
		<span className="sr-only">Next</span>
	</a>
);

class Carousel extends Component {
	render() {
		return (
			<div id="carousel" className="carousel slide" data-ride="carousel">
				<CarouselIndicators />
				<div className="carousel-inner">
					<SlideEduSupport />
					<SlideLife /> 
					<SlideConnections />
					<SlideArts />
				</div>
				<CarouselControlPrevious />
				<CarouselControlNext />
			</div>
		)
	}
}

export default Carousel;