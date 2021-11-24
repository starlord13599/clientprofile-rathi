import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';

import useStyles from './login.style';
import loginValidationSchema from '../../app/validations/loginSchema';
// import LocalStorage from '../../app/service/LocalStorage';
import { logIn } from './loginSlice';
import LocalStorage from '../../app/service/LocalStorage';

function Login() {
	const classes = useStyles();

	const [isVisible, setVisibility] = useState(false);
	const { enqueueSnackbar } = useSnackbar();

	const dispatch = useDispatch();
	const status = useSelector((state) => state.auth.status);

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginValidationSchema,
		onSubmit: async (values) => {
			try {
				const response = await dispatch(logIn(values)).unwrap();
				const { tokens, user_profile } = response.data;
				LocalStorage.setItem('user', user_profile);
				LocalStorage.setItem('token', tokens);

				return enqueueSnackbar('You are logged in', { variant: 'success' });
			} catch (error) {
				return enqueueSnackbar(error, { variant: 'error' });
			}
		},
	});

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login In
				</Typography>

				<form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
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
					<Box className={classes.buttonBox}>
						<Button
							disabled={status === 'loading'}
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Login
						</Button>
						{status === 'loading' && (
							<CircularProgress className={classes.butonSpinner} size={24} />
						)}
					</Box>
					{/* <Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid> */}
				</form>
			</div>
		</Container>
	);
}

export default Login;
