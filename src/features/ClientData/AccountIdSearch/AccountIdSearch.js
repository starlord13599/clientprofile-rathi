import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOptions } from '../clientDataSlice';

function AccountIdSearch() {
	const dispatch = useDispatch();

	const optionStatus = useSelector((state) => state.dataGrid.optionStatus);
	const options = useSelector((state) => state.dataGrid.options);

	const [inputValue, setInputValue] = useState('');

	const onInputChange = (newInputValue) => {
		setInputValue(newInputValue);
		//api call to set data in global state
		// /api/transaction/list/for-client/CK16A
	};

	useEffect(() => {
		if (optionStatus === 'idle') {
			dispatch(fetchOptions());
		}
	}, [optionStatus, dispatch, options]);

	return (
		<>
			<Autocomplete
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					onInputChange(newInputValue);
				}}
				size="small"
				options={options}
				getOptionLabel={(option) => option.account_id}
				style={{ width: 300, marginRight: '1rem' }}
				renderInput={(params) => (
					<TextField {...params} label="Account Id" variant="outlined" />
				)}
			/>
		</>
	);
}

export default AccountIdSearch;
