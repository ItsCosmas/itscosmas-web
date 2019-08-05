import React from 'react';
import Social from '../social/Social';
import './Footer.scss';

const Footer = () => {
    return (
        <section className={'footer'} id='contact'>
            <h1 className={'section-title'}>Contact</h1>
            <div className={'contact-details'}>
                <div><h1 className={'my-name highlight'}>Cosmas Gikunju</h1></div>
                <div><span className={'highlight'}>Full stack Developer</span></div>
                <div><span className={'highlight'}>gikunjucosmas@gmail.com</span></div>
                <Social />
                <div><span className={'highlight'}>All rights reserved | &copy; {new Date().getFullYear()} | Cosmas Gikunju <span role="img" aria-label="alien">👽</span></span></div>
            </div>
        </section>
    )
}
export default Footer;