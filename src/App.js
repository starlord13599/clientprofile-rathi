import React from 'react';
import { Redirect, Switch, Route } from 'react-router';
import { useSelector } from 'react-redux';

import Login from './features/Login/Login';
import FileUpload from './features/FileUpload/FileUpload';
import ClientData from './features/ClientData/ClientData';

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	let routes = (
		<Switch>
			<Route exact path="/login" component={Login}></Route>
			<Redirect to="/login"></Redirect>
		</Switch>
	);

	if (isAuthenticated) {
		routes = (
			<Switch>
				<Route exact path="/dashboard" component={ClientData}></Route>
				<Route exact path="/file-upload" component={FileUpload}></Route>
				<Redirect to="/dashboard"></Redirect>
			</Switch>
		);
	}

	return <>{routes}</>;
}

export default App;
