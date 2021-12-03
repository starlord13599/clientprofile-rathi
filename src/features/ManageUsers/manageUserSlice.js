import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../app/service/Axios';

const initialState = {
	status: 'idle',
	listStatus: 'idle',
	list: [],
};

export const addUser = createAsyncThunk('manageUser/add', async (values, { rejectWithValue }) => {
	try {
		const { email, password, firstName, lastName, role } = values;
		const response = await Axios.apiPost('api/user/create', {
			email,
			password,
			first_name: firstName,
			last_name: lastName,
			role,
		});

		if (response.status === 201) {
			return response;
		}

		return rejectWithValue('Somethig went wrong');
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const listUsers = createAsyncThunk(
	'manageUser/list',
	async (values, { rejectWithValue }) => {
		try {
			const response = await Axios.apiGet('api/user/create');

			if (response.status === 200) {
				return response;
			}

			return rejectWithValue('Somethig went wrong');
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const { reducer } = createSlice({
	name: 'manageUser',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addUser.fulfilled, (state, action) => {
				state.status = 'idle';
			})
			.addCase(addUser.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(addUser.rejected, (state, action) => {
				state.status = 'idle';
			})
			.addCase(listUsers.fulfilled, (state, action) => {
				state.listStatus = 'success';
				state.list = action.payload.data.results;
			})
			.addCase(listUsers.pending, (state, action) => {
				state.listStatus = 'loading';
			})
			.addCase(listUsers.rejected, (state, action) => {
				state.listStatus = 'rejected';
			});
	},
});

// export const {} = manageUserSlice.actions;
export default reducer;
