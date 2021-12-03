import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './context/theme/themeSlice';
import authReducer from '../features/Login/loginSlice';
import dataGrid from '../features/ClientData/clientDataSlice';
import manageUser from '../features/ManageUsers/manageUserSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		auth: authReducer,
		dataGrid: dataGrid,
		manageUser: manageUser,
	},
});
