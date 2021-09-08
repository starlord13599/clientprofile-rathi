import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { getThemeType, getTypoGraphy } from './theme';

function AppThemeProvider({ children }) {
	const type = useSelector((state) => state.theme.type);

	const theme = createTheme({
		typography: {
			...getTypoGraphy(),
		},
		palette: {
			...getThemeType(type),
		},
	});

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
