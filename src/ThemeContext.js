import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
	dark: false,
	toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider({ children }) {
	// See https://stackoverflow.com/a/61119008/7744772 for more
	// Check whether user prefers dark theme in system
	/* Because you are setting the initial theme to non-dark, 
    you can assume that your initial state should be dark only 
	when the user's preference is set to dark. */

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
		.matches;

	// keeps state of the current theme
	const [dark, setDark] = useState(prefersDark);

	// Apply theme before it renders elements
	useLayoutEffect(() => {
		/* You end up here only when the user takes action 
        to change the theme, hence you can just apply the new theme. */
		applyTheme();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dark]);

	// rewrites set of css variablels/colors
	const applyTheme = () => {
		let theme;
		if (dark) {
			theme = darkTheme;
		}
		if (!dark) {
			theme = lightTheme;
		}
		const root = document.getElementsByTagName('html')[0];
		root.style.cssText = theme.join(';');
	};

	const toggle = () => {
		// A smooth transition on theme switch
		const body = document.getElementsByTagName('body')[0];
		body.style.cssText = 'transition: background .5s ease';

		setDark(!dark);
	};

	return (
		<ThemeContext.Provider
			value={{
				dark,
				toggle,
			}}>
			{children}
		</ThemeContext.Provider>
	);
}

// styles
const lightTheme = [
	'--bg-color: var(--color-white)',
	'--text-color-primary: var(--color-black)',
	'--text-color-secondary: var(--color-prussianBlue)',
	'--text-color-tertiary:var(--color-azureRadiance)',
	'--fill-switch: var(--color-prussianBlue)',
	'--fill-primary:var(--color-prussianBlue)',
];

const darkTheme = [
	'--bg-color: var(--color-mirage)',
	'--text-color-primary: var(--color-white)',
	'--text-color-secondary: var(--color-iron)',
	'--text-color-tertiary: var(--color-white)',
	'--fill-switch: var(--color-gold)',
	'--fill-primary:var(--color-white)',
];
