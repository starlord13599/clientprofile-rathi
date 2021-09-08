import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	type: 'light',
};

const { actions, reducer } = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeToDark: (state) => {
			state.type = 'dark';
		},
		changeToLight: (state) => {
			state.type = 'light';
		},
	},
});

export const { changeToDark, changeToLight } = actions;

export default reducer;
