import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../sect_header';
import Sidebar from './components/sidebar';
import PageLog from './components/sub-page/log';
import PageMembers from './components/sub-page/members';
import PageReports from './components/sub-page/reports';
import PageDashboard from './components/sub-page/dashboard';
import auth0Client from '../../auth';
import './admin.css';

const ContentAdmin = () => (
	<div className="container-fluid">
		<div className="row">
			<div>
			  <h3>Admin</h3>
			  <h4>Crosswalk Admin.</h4>
			</div>
		</div>
	</div>
);

class AdminPage extends Component {
	render() {

		// const signOut = () => {
		// 	auth0Client.signOut();
		// 	this.props.history.replace('/');
		// };

		window.scrollTo(0, 0);
		return (
			<Router>
				<div>
					<Header />
					<div className="wrapper">
						<Sidebar />
						<Route exact path='/admin' component={ContentAdmin} />
						<Route path='/admin/members' component={PageMembers} />
						<Route path='/admin/reports' component={PageReports} />
						<Route path='/admin/logs' component={PageLog} />
						<Route path='/admin/dashboard' component={PageDashboard} />
					</div>
				</div>
			</Router>
		)
	}
}

export default AdminPage;