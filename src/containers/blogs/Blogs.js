import React, { useContext } from 'react';
import { StateContext } from '../../StateContext';
import Spinner from '../../components/spinner/Spinner';
import Blog from '../../components/blog/Blog';

const Blogs = () => {
	const [state] = useContext(StateContext);
	const { blogList } = state;

	if (blogList === undefined || blogList.length === 0) {
		return <Spinner message='Getting Blogs ...' />;
	} else {
		return (
			<React.Fragment>
				{blogList.map((item) => (
					<Blog key={item} blog={item.body} />
				))}
			</React.Fragment>
		);
	}
};
export default Blogs;
