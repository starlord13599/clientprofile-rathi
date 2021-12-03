import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MiniDrawer from '../Drawer/Drawer';
import { LinearProgress } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { listUsers } from './manageUserSlice';
import { columns } from './dummyData.js';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './manageUsers.styles';

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
			<Link to="/manage-users/add" className={classes.links}>
				<Button variant="contained">Add User</Button>
			</Link>

			{listStatus === 'loading' ? (
				<LinearProgress />
			) : (
				<MUIDataTable
					title={'Users'}
					data={rows}
					columns={columns}
					// options={options}
				></MUIDataTable>
			)}
		</MiniDrawer>
	);
}

export default ManageUser;
