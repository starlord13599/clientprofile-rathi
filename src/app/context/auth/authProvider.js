import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../features/Login/loginSlice';

function AuthProvider({ children, isAuthenticated }) {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('in auth provider');
		if (!isAuthenticated) {
			let value = localStorage.getItem('isAuthenticated');

			if (value) {
				return dispatch(logIn());
			}
			//check the  local storage for user if any present
			//set is Authenticated accordingly
		}
	});

	return <>{children}</>;
}

export default AuthProvider;
