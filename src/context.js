import React, { useState, useEffect } from 'react';

import { db } from './firebase';

export const StateContext = React.createContext();

export function ContextController({ children }) {
	const intialState = {
		projectList: [],
		blogList: []
	};

	const [state, setState] = useState(intialState);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		// get all projects
		db.collection('projects')
			.get()
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => doc.data());
				let sorted = [];

				// loop through each object and push to sorted array
				data.forEach((item) => {
					sorted.push(item.body);
				});
				// reverse sort the projects
				sorted.sort(
					(a, b) => parseInt(b.project_id) - parseFloat(a.project_id)
				);
				setState((state) => ({
					...state,
					projectList: sorted
				}));
			});

		// get all blogs
		db.collection('blog')
			.get()
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => doc.data());
				setState((state) => ({
					...state,
					blogList: data
				}));
			});
	}

	return (
		<StateContext.Provider value={[state, setState]}>
			{children}
		</StateContext.Provider>
	);
}
