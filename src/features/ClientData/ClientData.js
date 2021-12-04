import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import MiniDrawer from '../Drawer/Drawer';
import { fetchData, dropAllTransactions } from './clientDataSlice';
import { columns } from './dummyData';
import { withRouter } from 'react-router';
import MUIDataTable from 'mui-datatables';
import { LinearProgress, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from './clientData.styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const options = {
	filterType: 'dropdown',
	selectableRows: 'none',
	tableBodyMaxHeight: '450px',
	resizeableColumns: true,
	responsive: 'standard',
	downloadOptions: {
		filename: 'Employee List.csv',
		filterOptions: {
			useDisplayedColumnsOnly: true,
			useDisplayedRowsOnly: true,
		},
	},
	draggableColumns: {
		enabled: true,
	},
};

function ClientData() {
	const classes = useStyles();

	const { enqueueSnackbar } = useSnackbar();

	const rows = useSelector((state) => state.dataGrid.data);
	const error = useSelector((state) => state.dataGrid.error);
	const status = useSelector((state) => state.dataGrid.status);

	const dispatch = useDispatch();

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchData());
		}

		if (error) {
			enqueueSnackbar(error, { variant: 'error' });
		}
	}, [dispatch, error, enqueueSnackbar, status]);

	const handleDropTransaction = async () => {
		try {
			await dispatch(dropAllTransactions()).unwrap();
			return enqueueSnackbar('All transactions were deleted', { variant: 'success' });
		} catch (error) {
			return enqueueSnackbar(error.message, { variant: 'error' });
		}
	};

	return (
		<MiniDrawer>
			<Grid className={classes.topbar} container spacing={3}>
				<Grid item xs={9}>
					<Typography variant="h5">Transitions list</Typography>
				</Grid>

				<Grid justifyContent="flex-end" item xs={3}>
					<Button
						onClick={handleDropTransaction}
						color="secondary"
						variant="contained"
						endIcon={<DeleteForeverIcon />}
						fullWidth
					>
						Delete all transactions
					</Button>
				</Grid>
			</Grid>

			{status === 'loading' ? (
				<LinearProgress />
			) : (
				<MUIDataTable data={rows} columns={columns} options={options}></MUIDataTable>
			)}
		</MiniDrawer>
	);
}

export default withRouter(ClientData);
