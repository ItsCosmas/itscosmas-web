import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../../components/layout/spinner/Spinner';
import Project from '../../components/layout/project/Project';

class Projects extends Component {
    render(){
        return(
            <Consumer>
                {value =>{
                    const { project_list } = value;
                    if (project_list === undefined || project_list.length === 0) {
                        return <Spinner message = "Getting Projects ..." />
                    } else {
                        return(
                            <React.Fragment>
                                {project_list.map(item => (
                                    <Project key={item.body.project_id} project={item.body}/>
                                ))}
                            </React.Fragment>
                        )
                    }
                }}
            </Consumer>
        )
    }
}
export default Projects;