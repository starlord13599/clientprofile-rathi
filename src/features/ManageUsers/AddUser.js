import React, { useState } from 'react';
import MiniDrawer from '../Drawer/Drawer';
import useStyles from './manageUsers.styles';
import { useDispatch, useSelector } from 'react-redux';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import addUserSchema from '../../app/validations/addUserSchema';
import { addUser } from './manageUserSlice';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

function AddUser() {
	const classes = useStyles();

	const { enqueueSnackbar } = useSnackbar();
	const [isVisible, setVisibility] = useState(false);

	const status = useSelector((state) => state.manageUser.status);

	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			role: '',
		},
		validationSchema: addUserSchema,
		onSubmit: async (values) => {
			try {
				await dispatch(addUser(values)).unwrap();
				return enqueueSnackbar('User added successfully', { variant: 'success' });
			} catch (error) {
				return enqueueSnackbar(error, { variant: 'error' });
			}
		},
	});

	return (
		<MiniDrawer>
			<Container maxWidth="sm">
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
						Add User
					</Typography>
					<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
						<FormControl
							margin="normal"
							fullWidth
							variant="outlined"
							error={formik.touched.firstName && Boolean(formik.errors.firstName)}
						>
							<InputLabel>First name</InputLabel>
							<OutlinedInput
								name="firstName"
								type="text"
								value={formik.values.firstName}
								labelWidth={40}
								onChange={formik.handleChange}
							></OutlinedInput>
							<FormHelperText>
								{formik.touched.firstName && formik.errors.firstName}
							</FormHelperText>
						</FormControl>

						<FormControl
							margin="normal"
							fullWidth
							variant="outlined"
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
						>
							<InputLabel>Last Name</InputLabel>
							<OutlinedInput
								name="lastName"
								type="text"
								value={formik.values.lastName}
								labelWidth={40}
								onChange={formik.handleChange}
							></OutlinedInput>
							<FormHelperText>
								{formik.touched.lastName && formik.errors.lastName}
							</FormHelperText>
						</FormControl>

						<FormControl
							margin="normal"
							fullWidth
							variant="outlined"
							error={formik.touched.email && Boolean(formik.errors.email)}
						>
							<InputLabel>Email</InputLabel>
							<OutlinedInput
								name="email"
								type="email"
								value={formik.values.email}
								labelWidth={40}
								onChange={formik.handleChange}
							></OutlinedInput>
							<FormHelperText>
								{formik.touched.email && formik.errors.email}
							</FormHelperText>
						</FormControl>

						<FormControl
							margin="normal"
							fullWidth
							variant="outlined"
							error={formik.touched.password && Boolean(formik.errors.password)}
						>
							<InputLabel>Password</InputLabel>
							<OutlinedInput
								name="password"
								type={isVisible ? 'text' : 'password'}
								value={formik.values.password}
								labelWidth={70}
								onChange={formik.handleChange}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											edge="end"
											onClick={() => setVisibility(!isVisible)}
										>
											{isVisible ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
							></OutlinedInput>
							<FormHelperText>
								{formik.touched.password && formik.errors.password}
							</FormHelperText>
						</FormControl>

						<FormControl
							margin="normal"
							fullWidth
							variant="outlined"
							className={classes.formControl}
							error={formik.touched.role && Boolean(formik.errors.role)}
						>
							<InputLabel>Role</InputLabel>
							<Select
								name="role"
								onChange={formik.handleChange}
								value={formik.values.role}
								labelWidth={35}
							>
								<MenuItem value="admin">Admin</MenuItem>
								<MenuItem value="employee">Employee</MenuItem>
							</Select>
							<FormHelperText>
								{formik.touched.role && formik.errors.role}
							</FormHelperText>
						</FormControl>

						<Box className={classes.buttonBox}>
							<Button
								disabled={status === 'loading'}
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								Add User
							</Button>
							{status === 'loading' && (
								<CircularProgress className={classes.butonSpinner} size={24} />
							)}
						</Box>
					</form>
				</div>
			</Container>
		</MiniDrawer>
	);
}

export default AddUser;
