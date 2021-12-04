import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MiniDrawer from '../Drawer/Drawer';
import { LinearProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MUIDataTable from 'mui-datatables';
import { listUsers } from './manageUserSlice';
import { columns } from './dummyData.js';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './manageUsers.styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ManageUser() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const listStatus = useSelector((state) => state.manageUser.listStatus);
	const rows = useSelector((state) => state.manageUser.list);

	useEffect(() => {
		if (listStatus === 'idle') {
			dispatch(listUsers());
		}
	}, [dispatch, listStatus]);

	return (
		<MiniDrawer>
			<Grid className={classes.topbar} container spacing={3}>
				<Grid item xs={9}>
					<Typography variant="h5">Manage Users</Typography>
				</Grid>

				<Grid justifyContent="flex-end" item xs={3}>
					<Link to="/manage-users/add" className={classes.links}>
						<Button endIcon={<AddIcon />} fullWidth>
							Add User
						</Button>
					</Link>
				</Grid>
			</Grid>

			{listStatus === 'loading' ? (
				<LinearProgress />
			) : (
				<MUIDataTable
					// title={'Users'}
					data={rows}
					columns={columns}
					// options={options}
				></MUIDataTable>
			)}
		</MiniDrawer>
	);
}

export default ManageUser;
