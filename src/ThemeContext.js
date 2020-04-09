import React, { useState, useLayoutEffect } from 'react';
import { useMediaLayout } from 'use-media';

const ThemeContext = React.createContext({
	dark: false,
	toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider({ children }) {
	// keeps state of the current theme
	const [dark, setDark] = useState(false);

	const prefersDark = useMediaLayout('(prefers-color-scheme: dark)');
	const prefersLight = useMediaLayout('(prefers-color-scheme: light)');
	const prefersNotSet = useMediaLayout(
		'(prefers-color-scheme: no-preference)'
	);

	// paints the app before it renders elements
	useLayoutEffect(() => {
		const lastTheme = window.localStorage.getItem('darkTheme');

		// Media Hook to check what theme user prefers
		if (prefersDark) {
			console.log('User Prefers dark theme');
			setDark(true);
			applyTheme(darkTheme);
		}

		if (prefersLight) {
			console.log('User Prefers light theme');
			setDark(false);
			applyTheme(lightTheme);
		}

		if (prefersNotSet) {
			console.log('User Preference theme not set');

			setDark(true);
			applyTheme(darkTheme);
		}

		if (lastTheme === 'true') {
			console.log('User Previous theme was dark');
			setDark(true);
			applyTheme(darkTheme);
		} else {
			console.log('User Previous theme was not set so we show light');
			setDark(false);
			applyTheme(lightTheme);
		}
		// if state changes, repaints the app
	}, [dark]);

	// rewrites set of css variablels/colors
	const applyTheme = (theme) => {
		const root = document.getElementsByTagName('html')[0];
		root.style.cssText = theme.join(';');
	};

	const toggle = () => {
		const body = document.getElementsByTagName('body')[0];
		body.style.cssText = 'transition: background .5s ease';

		setDark(!dark);
		window.localStorage.setItem('darkTheme', !dark);
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
