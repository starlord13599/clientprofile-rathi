export function getThemeType(type) {
	if (type === 'dark') {
		return {
			type: 'dark',
			primary: { main: '#90caf9', dark: '#648dae', light: '#a6d4fa' },
			secondary: { main: '#dc004e', dark: '#dc004e', light: '#e33371' },
		};
	}
	return {
		type: 'light',
		primary: { main: '#1976d2', dark: '#115293', light: '#4791db' },
		secondary: { main: '#dc004e', dark: '#9a0036', light: '#e33371' },
	};
}

export function getTypoGraphy() {
	return {
		fontFamily: 'Quicksand',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	};
}
