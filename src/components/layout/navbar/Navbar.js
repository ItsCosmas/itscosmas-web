import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className={"navbar"}>
            <div className={"navbar__logo-name"}>
                <Link to="/" className="navbar__logo-link">Cozy</Link>
            </div>
            <div className={"navbar__nav"}>
                <ul className={"navbar__list"}>
                    <li className={"navbar__item"}><a href={'/#stack'} className={"navbar__link"}>Stack</a></li>
                    <li className={"navbar__item"}><Link to={'projects'} className={"navbar__link"}>Projects</Link></li>
                    <li className={"navbar__item"}><Link to={'blog'} className={"navbar__link"}>Blog</Link></li>
                    <li className={"navbar__item"}><a href={'#contact'} className={"navbar__link"}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;