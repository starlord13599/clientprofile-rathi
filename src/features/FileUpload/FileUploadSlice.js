import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../app/service/Axios';

const initialState = { status: 'idle' };

export const uplaodFile = createAsyncThunk(
	'fileUplaod/upload',
	async (values, { rejectWithValue }) => {
		try {
			const { data, status } = await Axios.apiPost(values.url, values.formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			if (status !== 200) {
				return rejectWithValue('Error while uploading file');
			}

			return data;
		} catch (error) {
			return rejectWithValue('Internal Server Error');
		}
	}
);

export const dropAllTransactions = createAsyncThunk(
	'fileUplaod/dropAllTransactions',
	async (values, { rejectWithValue }) => {
		try {
			const { data, status } = await Axios.apiDelete('api/transaction/delete-all');

			if (status !== 200) {
				return rejectWithValue('Error while dropping transactions');
			}

			return data;
		} catch (error) {
			return rejectWithValue('Internal Server Error');
		}
	}
);

const { reducer } = createSlice({
	name: 'fileUplaod',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(uplaodFile.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(uplaodFile.fulfilled, (state, action) => {
				state.status = 'success';
			})
			.addCase(uplaodFile.rejected, (state, action) => {
				state.status = 'rejected';
			});
	},
});

export default reducer;
