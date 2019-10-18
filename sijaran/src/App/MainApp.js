import React from 'react'
import Login from './Auth/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const MainApp = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/" exact component={Login} />
				</Switch>
			</Router>
		</div>
	)
}
export default MainApp;