import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../../components/layout/spinner/Spinner';
import Blog from '../../components/layout/blog/Blog';

class Projects extends Component {
    render(){
        return(
            <Consumer>
                {value =>{
                    const { blog_list } = value;
                    if (blog_list === undefined || blog_list.length === 0) {
                        return <Spinner message = "Getting Blogs ..." />
                    } else {
                        return(
                            <React.Fragment>
                                {blog_list.map(item => (
                                    <Blog key={item} blog={item.body}/>
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