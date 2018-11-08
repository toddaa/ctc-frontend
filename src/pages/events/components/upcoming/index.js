import React, { Component } from 'react';
import './upcoming.css';


class Upcoming extends Component {
	render() {
		return (
			<section className="upcoming pl-2 w-100">
				<div className="card text-white bg-info">
					<div className="card-body">
						<h5 className="card-title">Upcoming Events</h5>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<div className="event-title">2018 Fall Banquet</div>
							<div className="event-date">
								<div className="event-start-date">October 18, 2018</div>
								<div className="event-start-time">6PM</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="event-title">Thanksgiving</div>
							<div className="event-date">
								<div className="event-start-date">November 22, 2018</div>
							</div>
						</li>
						<li className="list-group-item">
						<div className="event-title">Christmas</div>
							<div className="event-date">
								<div className="event-start-date">December 25, 2018</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		)
	}
}

export default Upcoming;