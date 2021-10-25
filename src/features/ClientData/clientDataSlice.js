import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../app/service/Axios';

const initialState = { data: [], status: 'idle', error: null };

export const fetchData = createAsyncThunk(
	'dataGrid/fetchData',
	async (values, { rejectWithValue }) => {
		try {
			const { data, status } = await Axios.apiGet('api/transaction/list');
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
				state.data = action.payload.data;
				state.status = 'success';
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.error = action.payload;
				state.status = 'rejected';
			});
	},
});

export const prepareRows = (state) => {};

export default reducer;
