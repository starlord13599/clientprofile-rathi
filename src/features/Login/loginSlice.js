import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../app/service/Axios';
import LocalStorage from '../../app/service/LocalStorage';

const initialState = {
	isAuthenticated: LocalStorage.getItem('user') ? true : false,
	status: 'idle',
	user: LocalStorage.getItem('user') || null,
	role: LocalStorage.getItem('user') ? LocalStorage.getItem('user').role : null,
};

export const logIn = createAsyncThunk('auth/logIn', async (values, { rejectWithValue }) => {
	try {
		const { email, password } = values;
		const response = await Axios.apiPost('api/user/login', { email, password });

		if (response.status === 200) {
			return response;
		}

		return rejectWithValue(response.data.message);
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

const { actions, reducer } = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		isAuthenticatedCheck: (state, action) => {
			let { user } = action.payload;
			state.isAuthenticated = true;
			state.user = user;
			state.role = user.role;
		},
		logOut: (state) => {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(logIn.fulfilled, (state, action) => {
				const { data } = action.payload;
				LocalStorage.setItem('user', data.user_profile);
				LocalStorage.setItem('token', data.tokens);
				state.isAuthenticated = true;
				state.user = data.user_profile;
				state.role = data.user_profile.role;
				state.status = 'idle';
			})
			.addCase(logIn.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(logIn.rejected, (state, action) => {
				state.status = 'idle';
			});
	},
});

export const { logOut, isAuthenticatedCheck } = actions;

export default reducer;
