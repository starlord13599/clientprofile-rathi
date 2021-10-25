import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import { store } from './app/store';
import App from './App';
import AppThemeProvider from './app/context/theme/appThemeProvider';
import { anchorOrigin, TransitionComponent, action, ref } from './features/SnackBar/SnackBar';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<AppThemeProvider>
				<CssBaseline>
					<SnackbarProvider
						anchorOrigin={anchorOrigin}
						TransitionComponent={TransitionComponent}
						action={action}
						ref={ref}
					>
						<App />
					</SnackbarProvider>
				</CssBaseline>
			</AppThemeProvider>
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
