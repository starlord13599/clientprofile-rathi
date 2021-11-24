import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../app/service/Axios';

const initialState = {
	data: [],
	status: 'idle',
	error: null,
	options: [],
	optionStatus: 'idle',
	optionError: null,
};

export const fetchData = createAsyncThunk(
	'dataGrid/fetchData',
	async (values, { rejectWithValue }) => {
		try {
			const { data, status } = await Axios.apiGet(`api/transaction/list`);

			if (status !== 200) {
				return rejectWithValue('Error while fetching data');
			}

			return data;
		} catch (error) {
			return rejectWithValue('Internal Server Error');
		}
	}
);

export const fetchOptions = createAsyncThunk(
	'dataGrid/fetchOptions',
	async (values, { rejectWithValue }) => {
		try {
			const { data, status } = await Axios.apiGet('/api/transaction/get-client-list');
			if (status !== 200) {
				return rejectWithValue('Error while fetching data');
			}

			return data;
		} catch (error) {
			return rejectWithValue('Internal Server Error');
		}
	}
);

const { reducer } = createSlice({
	name: 'dataGrid',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchData.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = 'success';
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.error = action.payload;
				state.status = 'rejected';
			})
			.addCase(fetchOptions.pending, (state, action) => {
				state.optionStatus = 'loading';
			})
			.addCase(fetchOptions.fulfilled, (state, action) => {
				state.options = action.payload;
				state.optionStatus = 'success';
			})
			.addCase(fetchOptions.rejected, (state, action) => {
				state.optionError = action.payload;
				state.optionStatus = 'rejected';
			});
	},
});

export default reducer;
