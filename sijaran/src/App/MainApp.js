import React from 'react'
import Login from './Auth/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import DaftarKendaraan from './DaftarKendaraan/DaftarKendaraan'

const MainApp = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/Dashboard" exact component={Dashboard} />
					<Route path="/DaftarKendaraan" exact component={DaftarKendaraan} />
				</Switch>
			</Router>
		</div>
	)
}
export default MainApp;