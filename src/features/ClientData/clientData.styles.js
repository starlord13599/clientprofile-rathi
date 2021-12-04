import { makeStyles, alpha } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '100%',
		height: '440px',
		marginTop: 10,
		overflowY: 'auto',
		listStyle: 'none',
		'&::-webkit-scrollbar': {
			width: '0.4em',
		},
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
			webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
		},
		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'rgba(0,0,0,.1)',
			outline: '1px solid slategrey',
		},
	},
	container: {
		minHeight: 440,
		maxHeight: 440,
		width: '100%',
	},
	margin: {
		marginRight: theme.spacing(1.5),
		marginBottom: theme.spacing(1),
	},
	search: {
		// position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.black, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.black, 0.25),
		},

		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: 'auto',
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},

	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	links: {
		textDecoration: 'none',
	},
	topbar: {
		marginBottom: '.1rem',
	},
}));

export default useStyles;
