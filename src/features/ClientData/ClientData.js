import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import TablePagination from '@material-ui/core/TablePagination';
import SearchIcon from '@material-ui/icons/Search';
import { useSnackbar } from 'notistack';
import LinearProgress from '@material-ui/core/LinearProgress';

import MiniDrawer from '../Drawer/Drawer';
import useStyles from './clientData.styles';
import { fetchData } from './clientDataSlice';
import TableGrid from './components/TableGrid';
import { columns } from './dummyData';
import NoDataFound from './components/NoDataFound';
import { withRouter } from 'react-router';

function ClientData() {
	const classes = useStyles();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState('asc');
	const [orderBy, setOrderBy] = useState('accountId');

	const { enqueueSnackbar } = useSnackbar();

	const rows = useSelector((state) => state.dataGrid.data);
	const error = useSelector((state) => state.dataGrid.error);
	const status = useSelector((state) => state.dataGrid.status);

	const dispatch = useDispatch();

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const createSortHandler = (property) => (event) => {
		handleRequestSort(event, property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

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
			<Box display="flex" alignItems="center">
				<Button variant="contained" className={classes.margin}>
					generate Data
				</Button>
				<Button variant="contained" className={classes.margin}>
					Export table data
				</Button>
				<Button variant="contained" className={classes.margin}>
					column visibility
				</Button>
				Report generated on 8/8/2021
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'search' }}
					/>
				</div>
			</Box>
			<Paper className={classes.root}>
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
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows ? rows.length : 0}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</MiniDrawer>
	);
}

export default withRouter(ClientData);
