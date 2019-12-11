import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
	return (
		<div className={'navbar'}>
			<div className={'navbar__logo-name text--azureRadiance'}>
				<Link to='/' className='navbar__logo-link'>
					Cozy
				</Link>
			</div>
			<div className={'navbar__nav'}>
				<ul className={'navbar__list text--azureRadiance'}>
					<li className={'navbar__list--item'}>
						<a href={'/#stack'} className={'navbar__list--link'}>
							Stack
						</a>
					</li>
					<li className={'navbar__list--item'}>
						<Link to={'projects'} className={'navbar__list--link'}>
							Projects
						</Link>
					</li>
					<li className={'navbar__list--item'}>
						<Link to={'blog'} className={'navbar__list--link'}>
							Blog
						</Link>
					</li>
					<li className={'navbar__list--item'}>
						<a href={'#contact'} className={'navbar__list--link'}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
