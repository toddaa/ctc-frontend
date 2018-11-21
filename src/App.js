import React, { Component } from 'react';
//import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/about';
import ProgramsPage from './pages/programs';
import EventsPage from './pages/events';
import DonatePage from './pages/donate';
import RootPage from './pages/root';
import AdminPage from './pages/admin';
// import LoginPage from './pages/login';
import Callback from './callback';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path='/' component={RootPage} />
						<Route path='/about' component={AboutPage} />
						<Route path='/programs' component={ProgramsPage} />
						<Route path='/events' component={EventsPage} />
						<Route path='/donate' component={DonatePage} />
						{/* <Route path='/login' component={LoginPage} /> */}
						<Route path='/admin' component={AdminPage} />
						<Route exact path='/callback' component={Callback}/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
