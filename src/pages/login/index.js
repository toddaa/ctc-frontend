import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Header from '../../sect_header';
import Footer from '../../sect_footer';
import {fakeAuth} from '../../App';
import './login.css';

class LoginPage extends Component {
	state = {
		redirectToReferrer: false
	}
	login = () => {
		console.log("here")
		fakeAuth.authenticate(() => {
			this.setState(() => ({
				redirectToReferrer: true
			}))
		})
	}
	render() {
		console.log(this.state)
		const { redirectToReferrer } = this.state

		if (redirectToReferrer === true){
			return (
				<Redirect to='/admin' />
			)
		}
		window.scrollTo(0, 0);
		return (
			<div>
				<Header />
				<div className="container main">
					{/* <div className="col-md-6 col-md-offset-3" style={{padding:0, marginTop:'56px'}}> */}
					<h2>Login</h2>
					<form name="form" onSubmit={this.handleSubmit}>
						<div className={'form-group'}>
							<label htmlFor="username">Username</label>
							<input type="text" className="form-control" name="username"  onChange={this.handleChange} />
						</div>
						<div className={'form-group'}>
							<label htmlFor="password">Password</label>
							<input type="password" className="form-control" name="password"  onChange={this.handleChange} />
						</div>
						<div className="form-group">
							<button className="btn btn-primary">Login</button>

							<Link to="/register" className="btn btn-link">Register</Link>
						</div>
					</form>
				</div>
				<Footer />
			</div>
		)
	}
}

export default LoginPage;