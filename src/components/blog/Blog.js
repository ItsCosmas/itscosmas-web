import React from 'react';
import icons from '../../assets/icons/sprite.svg';
import './Blog.scss';

const Blog = (props) => {
	const { blog } = props;
	return (
		<section className={'blog'}>
			<h4 className='heading__secondary'>{blog.blog_title}</h4>
			<p>{blog.blog_peek}</p>
			<div className={'blog__links'}>
				<a
					href={blog.link}
					className={'blog__link'}
					target='_blank'
					rel='noopener noreferrer'>
					<svg className={`blog__link--icon`}>
						<use xlinkHref={`${icons}#${'icon-newspaper'}`} />
					</svg>
					<span className={'btn u-center-text'}>
						Read Blog &#8594;
					</span>
				</a>
			</div>
		</section>
	);
};
export default Blog;
