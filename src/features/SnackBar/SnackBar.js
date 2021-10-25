import { createRef } from 'react';

import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const maxCount = 3;
const anchorOrigin = {
	vertical: 'top',
	horizontal: 'right',
};

const notistackRef = createRef();
const ref = notistackRef;

const onClickDismiss = (key) => () => {
	notistackRef.current.closeSnackbar(key);
};

const action = (key) => (
	<IconButton onClick={onClickDismiss(key)} color="inherit">
		<CloseIcon />
	</IconButton>
);

const TransitionComponent = Slide;

export { maxCount, anchorOrigin, TransitionComponent, action, ref };
