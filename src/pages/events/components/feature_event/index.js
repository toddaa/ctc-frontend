import React, { Component } from 'react';
import './feature.css';

import flyer from './Fall Banquet Postcard sm.png';

class FeatureEvent extends Component {
	render() {
		return (
			<section className="feature">
				<div className="card text-white bg-dark mb-3">
					<div className="card-body feature-event">
						<h5 className="card-title">2018 Fall Banquet</h5>
						<img className="float-right pl-2" src={flyer} alt="2018 Fall Banquet" width="200" />
						<p className="card-text">You are invited to our 2nd Annual Fall Banquet at St. Mary’s Family Life Center in Charlotte on Thursday, October 18th.
						Kicking off the evening at 6:00pm with a short time for networking followed at 6:30pm with a delicious dinner that will be accompanied by music provided by The Don Sovey Quintet.
						The program is intended to finish by 8:00pm and will include a brief presentation about the work of Crosswalk by the executive director Rick Todd and some personal heartfelt stories from youth who have been served by the center.</p>
						<p className="card-text">Crosswalk was founded in 2012 and has offered to the youth of the Charlotte area programming in art and music and given them a safe place to meet friends, learn new things and acquire new skills.
						The art classes have provided instruction in acrylic painting, pottery, photography, and mixed media arts.
						Culinary arts and business classes have demonstrated life skills necessary for the youth to possess as they establish their life path.
						Daily tutoring is offered to the teens for their junior and senior high academics.
						In the spring of 2018 the Teen Apprentice program was introduced to teach skills needed to get and keep a job, with the placement of 8 teens in jobs during the first session.
						Crosswalk believes in empowering teens to become community minded, prepared for the future, and making positive life choices. </p>
						<p className="card-text">The Fall Banquet intends to raise awareness and support for this work for our young people of Charlotte and the nearby surrounding area.</p>
					</div>
				</div>
			</section>
		)
	}
}

export default FeatureEvent;