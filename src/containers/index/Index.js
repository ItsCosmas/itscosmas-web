import React from 'react';

import { Helmet } from 'react-helmet';

import Header from '../../components/header/Header';
import Stack from '../../components/stack/Stack';

const Index = () => {
	return (
		<React.Fragment>
			<Helmet>
				{/* Open Graph */}
				<meta
					property='og:title'
					content='Cosmas Gikunju Portfolio App'
				/>
				<meta
					property='og:image'
					content='https://itscosmas.me/static/media/dev.2fb54ed8.svg'
				/>
				<meta property='og:type' content='article' />
				<meta
					property='og:description'
					content="Hi, I\'m Cosmas. I am performance-driven and motivated Full Stack Developer who possess a key attention to detail and best practices, well-developed time management skills, ability to complete all projects within schedule and in a timely manner as well as a lifelong learner who continuously refines his craft to be a better dev and human as well.Sometimes I blog on medium and dev🙂."
				/>
				{/* Twitter Card */}
				<meta
					name='twitter:title'
					content='Cosmas Gikunju Portfolio App'
				/>
				<meta
					name='twitter:image'
					content='https://itscosmas.me/static/media/dev.2fb54ed8.svg'
				/>
				<meta
					name='twitter:description'
					content="Hi, I\'m Cosmas, I am performance-driven and motivated Full Stack Developer who possess a key attention to detail and best practices, well-developed time management skills, ability to complete all projects within schedule and in a timely manner as well as a lifelong learner who continuously refines his craft to be a better dev and human as well.Sometimes I blog on medium and dev🙂."
				/>
			</Helmet>
			<Header />
			<Stack />
		</React.Fragment>
	);
};
export default Index;
