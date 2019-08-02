import React, { Component } from 'react';

import { db } from "./firebase";

const Context = React.createContext();

export class Provider extends Component {

    state = {
        project_list:[],
        blog_list:[]
    };

    componentDidMount(){

        // get all projects
        db.collection("projects")
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ project_list: data });
      });

      // get all blogs  
      db.collection("blog")
      .get()
      .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState({ blog_list: data });

    });

    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
