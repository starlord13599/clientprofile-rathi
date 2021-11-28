import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import TablePagination from '@material-ui/core/TablePagination';
import { useSnackbar } from 'notistack';
// import LinearProgress from '@material-ui/core/LinearProgress';
import MiniDrawer from '../Drawer/Drawer';
// import useStyles from './clientData.styles';
import { fetchData } from './clientDataSlice';
// import TableGrid from './components/TableGrid';
import { columns } from './dummyData';
// import NoDataFound from './components/NoDataFound';
import { withRouter } from 'react-router';
// import AccountIdSearch from './AccountIdSearch/AccountIdSearch';
import MUIDataTable from 'mui-datatables';
import { LinearProgress } from '@material-ui/core';

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
	// const classes = useStyles();
	// const [page, setPage] = useState(1);
	// const [rowsPerPage, setRowsPerPage] = useState(10);
	// const [order, setOrder] = useState('asc');
	// const [orderBy, setOrderBy] = useState('accountId');
	const { enqueueSnackbar } = useSnackbar();

	const rows = useSelector((state) => state.dataGrid.data);
	const error = useSelector((state) => state.dataGrid.error);
	const status = useSelector((state) => state.dataGrid.status);

	const dispatch = useDispatch();

	// const handleRequestSort = (event, property) => {
	// 	const isAsc = orderBy === property && order === 'asc';
	// 	setOrder(isAsc ? 'desc' : 'asc');
	// 	setOrderBy(property);
	// };

	// const createSortHandler = (property) => (event) => {
	// 	handleRequestSort(event, property);
	// };

	// const handleChangePage = (event, newPage) => {
	// 	setPage(newPage);
	// };

	// const handleChangeRowsPerPage = (event) => {
	// 	setRowsPerPage(+event.target.value);
	// 	setPage(1);
	// };

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchData());
		}

		if (error) {
			enqueueSnackbar(error, { variant: 'error' });
		}
	}, [dispatch, error, enqueueSnackbar, status]);

	return (
		<MiniDrawer>
			{/* <Box display="flex" alignItems="center">
				<AccountIdSearch></AccountIdSearch>
				<Button variant="contained">Export table data</Button>
			</Box> */}
			{/* <Paper className={classes.root}>
				{status === 'loading' ? (
					<LinearProgress />
				) : (
					<>
						{rows ? (
							<TableGrid
								rows={rows}
								columns={columns}
								orderBy={orderBy}
								order={order}
								classes={classes}
								createSortHandler={createSortHandler}
								isLoading={status}
							></TableGrid>
						) : (
							<NoDataFound />
						)}
					</>
				)}
			</Paper>
			<Paper>
				<TablePagination
					rowsPerPageOptions={[5, 10, 15]}
					component="div"
					count={rows ? rows.length : 0}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper> */}
			{status === 'loading' ? (
				<LinearProgress />
			) : (
				<MUIDataTable
					title={'Stock Exchange'}
					data={rows}
					columns={columns}
					options={options}
				></MUIDataTable>
			)}
		</MiniDrawer>
	);
}

export default withRouter(ClientData);
