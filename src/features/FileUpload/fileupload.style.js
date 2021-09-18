import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
	},
	previewIcon: {
		margin: theme.spacing(2),
		padding: theme.spacing(2),
	},
	input: {
		display: 'none',
	},
}));

export default useStyles;
