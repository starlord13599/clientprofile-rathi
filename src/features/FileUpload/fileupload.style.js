import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(1),
		textAlign: 'center',
	},
	previewIcon: {
		margin: theme.spacing(2),
		padding: theme.spacing(2),
	},
	input: {
		display: 'none',
	},
	uploadButton: {
		marginTop: '1rem',
	},
	verticalDivider: {
		// marginLeft: '1rem',
		// marginRight: '1rem',
	},
	uploadForm: {
		margin: '1rem',
	},
	gridContainer: {
		display: 'flex',
	},
}));

export default useStyles;
