import React, { Component } from 'react';
import './camps.css';


class Camps extends Component {
	render() {
		return (
			<section className="camps flex-shrink-1">
				<div className="card text-white bg-secondary">
					<div className="card-body camps">
						<h5 className="card-title">Camps</h5>
						<p className="card-text">During non-teen hours Crosswalk will be offering two Quest Camps for students entering 5th-7th grades.
						Each camp will be held from 9:00am – 12:00pm and run Monday - Wednesday for 2 consecutive weeks, a 6 day experience where students get excited about creating and making within the Quest Camp topics.</p>
						<p className="card-text">Art Quest Camp, July 17-19, 24-26, will focus on drawing, painting, clay handwork, clay pottery wheel, photography, and mixed media art.
						Our goal is to introduce new art media and techniques that the students can explore and develop.
						The class will culminate with a gallery event in the evening of Wednesday, the last day of camp, open to parents and the public.</p>
						<p className="card-text">Tech Quest Camp, July 31-August 2, 7-9, will focus on exploring STEM (science, technology, engineering, and mathematics) activities, focusing on how things work and what can be created.
						Teams will work together to explore a project problem and then design a solution to the problem.  We will explore electrical circuits, elementary electronics, light (LED) circuits, 3-D design, and mechanical motion.
						The class will culminate in a presentation of the student’s project in a showcase that will be open to parents and the public on the Wednesday evening of the last day of camp.</p>
						<p className="card-text">Both of these Quest Camps focus on making and are designed to encourage students to develop their own ideas, to experiment, and to innovate.
						Crosswalk has four goals in these sessions: 1. Get students to identify themselves as creators or makers. 2. Develop confidence in creative expression. 3. Acquire technical tools/skills. 4. Learn to collaborate and network with other to reach the project solution.
						While many focus on the measurable skills of math and engineering and fail to realize that similar processes are used in the creation of the fine arts, we approach both STEM and the arts with the same 4 goals.</p>
						<p className="card-text">Interested students should register by clicking the link above.
						The Quest Camp cost $15.00 and include a snack and t-shirt.  Space is limited.  If you have any questions, contact Rick Todd at either (248) 987-8336 or by email at rickt@crosswalkteencenter.org.</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Camps;