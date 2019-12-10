import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import dev from '../../../assets/illustration/dev.svg';

import TypedComponent from '../typed/TypedComponent';
import Social from '../social/Social';

const Header = () => {
	return (
		<section className={'header'}>
			<div className={'row'}>
				{/* Intro and Social go here */}
				<div className={'col-1-of-2'}>
					<div className={'header-action'}>
						<TypedComponent />
						<div>
							I am Performance-driven and motivated{' '}
							<span className={'highlight'}>
								Full Stack Developer{' '}
							</span>{' '}
							who Possess a key attention to detail and best
							practices, well-developed time management skills,
							ability to complete all projects within schedule and
							in a timely manner as well as a lifelong learner who
							continuously refines his craft to be a better dev
							and human as well.Sometimes I blog on medium and dev
							<span role='img' aria-label='slight smile'>
								🙂
							</span>
							.
						</div>
						<Social />
						<div className='action-btn'>
							<Link to={'projects'} className={'btn action-btn'}>
								Check out my Work &#8594;
							</Link>
						</div>
					</div>
				</div>

				{/* Illustration Goes Here */}
				<div className={'col-1-of-2'}>
					<img
						src={dev}
						className={`header-illustration`}
						alt='Header Illustration'
					/>
				</div>
			</div>
		</section>
	);
};
export default Header;
