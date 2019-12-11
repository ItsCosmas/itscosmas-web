import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import dev from '../../assets/illustration/dev.svg';

import TypedComponent from '../typed/TypedComponent';
import Social from '../social/Social';

const Header = () => {
	return (
		<section className={'header'}>
			{/* Intro and Social go here */}
			<div className={'header__cta'}>
				<TypedComponent />
				<div
					className={
						'text__content--cta text--black u-margin-bottom-small'
					}>
					I am performance-driven and motivated{' '}
					<span className={'text__highlight'}>
						Full Stack Developer
					</span>{' '}
					who possess a key attention to detail and best practices,
					well-developed time management skills, ability to complete
					all projects within schedule and in a timely manner as well
					as a lifelong learner who continuously refines his craft to
					be a better dev and human as well.Sometimes I blog on medium
					and dev
					<span role='img' aria-label='slight smile'>
						🙂
					</span>
					.
				</div>
				<Social />
				<div className={'u-margin-top-small'}>
					<Link to={'projects'} className={'btn btn-cta'}>
						Check out my Work &#8594;
					</Link>
				</div>
			</div>
			{/* Illustration Goes Here */}
			<div className={'header__visual'}>
				<img
					src={dev}
					className={`header__visual--img`}
					alt='Header Illustration'
				/>
			</div>
		</section>
	);
};
export default Header;
