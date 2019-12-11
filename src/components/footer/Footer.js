import React from 'react';
import Social from '../social/Social';
import './Footer.scss';

const Footer = () => {
	return (
		<section className={'footer'} id='contact'>
			<h1 className={'heading__primary heading__primary--prussianBlue'}>
				Contact
			</h1>
			<div className={'contact__details'}>
				<h4 className={'heading__tertiary text--prussianBlue'}>
					Cosmas Gikunju
				</h4>
				<span className={'heading__tertiary text--prussianBlue'}>
					Full Stack Developer
				</span>
				<span className='heading__tertiary text--prussianBlue u-margin-bottom-small'>
					devcosmas@gmail.com
				</span>
				<Social />
				<div className={'u-margin-top-small'}>
					<span className={'text__highlight'}>
						All rights reserved | &copy; {new Date().getFullYear()}{' '}
						| Cosmas Gikunju{' '}
						<span role='img' aria-label='alien'>
							👽
						</span>
					</span>
				</div>
			</div>
		</section>
	);
};
export default Footer;
