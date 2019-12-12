import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/icons/sprite.svg';
import './Navbar.scss';

import ThemeContext from '../../ThemeContext';

const Navbar = () => {
	const { toggle } = useContext(ThemeContext);

	return (
		<div className={'navbar'}>
			<div className={'navbar__logo-name'}>
				<Link to='/' className='navbar__logo-link'>
					Cozy
				</Link>
			</div>
			<div className={'navbar__nav'}>
				<ul className={'navbar__list'}>
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
					<li
						className={'navbar__list--item'}
						onClick={() => toggle()}>
						<svg className={`navbar__list--icon fill--switch`}>
							<use xlinkHref={`${icons}#${'icon-sun'}`} />
						</svg>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
