import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
	dark: false,
	toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider({ children }) {
	// Keep state of the user toggle
	const [userToggle, setUserToggle] = useState(false);

	// keeps state of the current theme
	const [dark, setDark] = useState(false);

	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
		.matches;
	const prefersLight = window.matchMedia('(prefers-color-scheme: light)')
		.matches;
	const prefersNotSet = window.matchMedia(
		'(prefers-color-scheme: no-preference)'
	).matches;

	// paints the app before it renders elements
	useLayoutEffect(() => {
		// This will stop the system preferences being applied if the user manually toggles theme
		if (!userToggle) {
			// Media Hook to check what theme user prefers
			if (prefersDark) {
				setDark(true);
			}

			if (prefersLight) {
				setDark(false);
			}

			if (prefersNotSet) {
				setDark(true);
			}
		}

		applyTheme();

		// if state changes, repaints the app
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

		setUserToggle(true);
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
