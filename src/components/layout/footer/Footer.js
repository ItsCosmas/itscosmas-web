import React from 'react';
import Social from '../social/Social';
import './Footer.scss';

const Footer = () => {
	return (
		<section className={'footer'} id='contact'>
			<h1 className={'section-title'}>Contact</h1>
			<div className={'contact-details'}>
				<div>
					<h1 className={'my-name'}>Cosmas Gikunju</h1>
				</div>
				<div>
					<span>Full stack Developer</span>
				</div>
				<div>
					<span>devcosmas@gmail.com</span>
				</div>
				<Social />
				<div>
					<span className={'highlight'}>
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
