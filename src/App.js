import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Index from './containers/index/Index';
import Footer from './components/footer/Footer';
import Projects from './containers/projects/Projects';
import Blogs from './containers/blogs/Blogs';

import { ContextController } from './context';

function App() {
	return (
		<ContextController>
			<Router>
				<React.Fragment>
					<Navbar />
					<main>
						<Switch>
							<Route exact path='/'>
								<Index />
							</Route>
							<Route
								exact
								path='/projects'
								component={Projects}
							/>
							<Route exact path='/blog' component={Blogs} />
						</Switch>
					</main>
					<Footer />
				</React.Fragment>
			</Router>
		</ContextController>
	);
}

export default App;
