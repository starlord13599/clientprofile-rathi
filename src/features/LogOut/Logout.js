import React from 'react';
import { useDispatch } from 'react-redux';
import LocalStorage from '../../app/service/LocalStorage';
import { useSnackbar } from 'notistack';
import { logOut } from '../Login/loginSlice';
import { Redirect } from 'react-router';

function Logout() {
	const dispatch = useDispatch();
	const { enqueueSnackbar } = useSnackbar();

	LocalStorage.removeAllItems();
	dispatch(logOut());
	enqueueSnackbar('Logged out successfully', { variant: 'info' });

	return <Redirect to="/login"></Redirect>;
}

export default Logout;
