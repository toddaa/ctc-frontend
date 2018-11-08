import React, { Component } from 'react';
import Header from '../../sect_header';
import Sidebar from './components/sidebar';
import './admin.css';

const ContentAdmin = () => (
	<div className="container-fluid">
		<div className="row">
			<div className="">
			  <h3 className="d-none d-sm-block">Admin</h3>
			  <h4>Crosswalk Admin.</h4>
			</div>
		</div>
	</div>
);

class AdminPage extends Component {
	render() {
		window.scrollTo(0, 0);
		return (
			<div>
				<Header />
				<div className="wrapper">
				<Sidebar />
				<ContentAdmin />
				</div>
			</div>
		)
	}
}

export default AdminPage;