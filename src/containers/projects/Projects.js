import React, { useContext } from 'react';
import { StateContext } from '../../StateContext';

import Spinner from '../../components/spinner/Spinner';
import Project from '../../components/project/Project';

const Projects = () => {
	const [state] = useContext(StateContext);
	const { projectList } = state;

	if (projectList === undefined || projectList.length === 0) {
		return <Spinner message='Getting Projects ...' />;
	} else {
		return (
			<React.Fragment>
				{projectList.map((item) => (
					<Project key={item.project_id} project={item} />
				))}
			</React.Fragment>
		);
	}
};
export default Projects;
