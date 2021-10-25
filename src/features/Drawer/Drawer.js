import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSnackbar } from 'notistack';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import useStyles from './drawer.style';
import { logOut } from '../Login/loginSlice';
import LocalStorage from '../../app/service/LocalStorage';
import { getMenu } from '../../app/roles/permissions';

export default function MiniDrawer({ children }) {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const [menus, setMenus] = useState([]);
	const menuOpen = Boolean(anchorEl);
	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();

	const role = useSelector((state) => state.auth.role);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = () => {
		LocalStorage.removeAllItems();
		dispatch(logOut());
		enqueueSnackbar('Logged out successfully', { variant: 'info' });
	};

	useEffect(() => {
		const menuData = getMenu(role);
		setMenus(menuData);
	}, [role]);

	return (
		<div className={classes.root}>
			<CssBaseline />
			{/* APPBAR */}
			<AppBar
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						AppName
					</Typography>

					<div className={classes.profileButton}>
						<IconButton onClick={handleMenu} color="inherit">
							<AccountCircleIcon />
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={menuOpen}
							onClose={handleClose}
						>
							<MenuItem onClick={handleLogOut}>
								<ListItemIcon>
									<ExitToAppIcon />
								</ListItemIcon>
								<Typography variant="inherit">Sign Out</Typography>
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>

			{/* DRAWER */}
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{menus.map((menu) => (
						<Link key={menu.label} className={classes.links} to={menu.path}>
							<ListItem color="inherit" button>
								<ListItemIcon>{<menu.icon />}</ListItemIcon>
								<ListItemText primary={menu.label} />
							</ListItem>
						</Link>
					))}
				</List>
				{/* use <Divider/> to divide the icons */}
			</Drawer>

			{/* MAIN CONTENT */}
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{children}
			</main>
		</div>
	);
}
