import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import { store } from './app/store';
import App from './App';
import AppThemeProvider from './app/context/theme/appThemeProvider';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<AppThemeProvider>
					<CssBaseline>
						<App />
					</CssBaseline>
				</AppThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
