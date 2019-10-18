import React from 'react'
import Login from './Auth/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'

const MainApp = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/Dashboard" exact component={Dashboard} />
				</Switch>
			</Router>
		</div>
	)
}
export default MainApp;