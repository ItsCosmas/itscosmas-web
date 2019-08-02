import React from 'react';
import icons from '../../../assets/icons/sprite.svg';
import './Blog.scss';

const Blog = (props) => {
    const { blog } = props;
    return (
        <section className={'blog'}>
                <h4 className="content-title">{blog.blog_title}</h4>
                <p>{blog.blog_peek}</p>
                <div className={'blog-links'}>
                    <a href={blog.link} className={'blog-link'} target="_blank" rel="noopener noreferrer" >
                        <svg className={`blog-link__icon`}>
                            <use xlinkHref={`${icons}#${'icon-newspaper'}`} />
                        </svg>
                        <span className={'btn u-center-text'}>Read Blog &#8594;</span>
                    </a>
                </div>
        </section>
    )
}
export default Blog;