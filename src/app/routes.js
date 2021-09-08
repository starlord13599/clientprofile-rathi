import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute({ Component, isAuthenticated, ...options }) {
	return (
		<Route
			{...options}
			render={(props) => {
				if (!isAuthenticated) {
					return <Component {...props} />;
				}
				return (
					<Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
				);
			}}
		/>
	);
}

function ProtectedRoute({ Component, isAuthenticated, ...options }) {
	return (
		<Route
			{...options}
			render={(props) => {
				if (!isAuthenticated) {
					return (
						<Redirect
							to={{
								pathname: '/login',
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
				return <Component {...props} />;
			}}
		/>
	);
}

export { PublicRoute, ProtectedRoute };
