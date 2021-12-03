import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		// marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	buttonBox: {
		position: 'relative',
	},
	butonSpinner: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-8px',
		marginLeft: '-12px',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	links: {
		textDecoration: 'none',
	},
}));

export default useStyles;
