import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
};

const { actions, reducer } = createSlice({
	name: 'login',
	initialState,
	reducers: {
		logIn: (state) => {
			state.isAuthenticated = true;
		},

		logOut: (state) => {
			state.isAuthenticated = false;
		},
	},
});

export const { logIn, logOut } = actions;

export default reducer;
