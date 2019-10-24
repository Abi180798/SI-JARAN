import React from 'react'
import Login from './Auth/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Tentang from './Tentang/Tentang'

const MainApp = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/tentang" exact component={Tentang} />

				</Switch>
			</Router>
		</div>
	)
}
export default MainApp;