import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './context/theme/themeSlice';
import authReducer from '../features/Login/loginSlice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		auth: authReducer,
	},
});
