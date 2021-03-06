import React from 'react';
import { Switch } from 'react-router';
import { useSelector } from 'react-redux';

import Login from './features/Login/Login';
import { PublicRoute, ProtectedRoute } from './app/routes';
import Dashboard from './features/Dashboard/Dashboard';
import AuthProvider from './app/context/auth/authProvider';
import MiniDrawer from './features/Drawer/Drawer';

function App() {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return (
		<AuthProvider isAuthenticated={isAuthenticated}>
			<Switch>
				<PublicRoute
					exact
					path="/login"
					Component={Login}
					isAuthenticated={isAuthenticated}
				></PublicRoute>

				<ProtectedRoute
					exact
					path="/dashboard"
					Component={Dashboard}
					isAuthenticated={isAuthenticated}
				></ProtectedRoute>

				<PublicRoute exact path="/drawer" Component={MiniDrawer}></PublicRoute>
			</Switch>
		</AuthProvider>
	);
}

export default App;
