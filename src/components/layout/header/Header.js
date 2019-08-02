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
                        <TypedComponent/>
                        <div>
                            I'm a <span className={'highlight'}>Full Stack Software Developer</span> who codes for the love <span role="img" aria-label="beating heart">💓</span>. With a key attention to detail
                            and best practice, I'm continously refining my craft to be the best version of a developer
                            and to deliver the best product possible. Always willing to lose myself in the zone and crunch the code!
                            Sometimes I blog on medium and dev <span role="img" aria-label="slight smile">🙂</span>.
                        </div>
                        <Social/>
                        <div className="action-btn">
                            <Link to={'projects'} className={'btn action-btn'}>Check out my Work &#8594;</Link>
                        </div>
                    </div>
                </div>

                {/* Illustration Goes Here */}
                <div className={'col-1-of-2'}>
                    <img src={dev} className={`header-illustration`} alt="Header Illustration" />
                </div>

            </div>
        </section>
    )
}
export default Header;