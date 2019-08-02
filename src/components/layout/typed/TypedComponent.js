import React from 'react';
import Typed from 'react-typed';

import './Typed.scss';

const TypedComponent = (props) => {
    return (
        <h1>
            <Typed
                strings={['Hi, I\'m Cosmas <span class="waving-hand">👋🏾</span>']}
                typeSpeed={20}
            />
        </h1>
    )
};

export default TypedComponent;
