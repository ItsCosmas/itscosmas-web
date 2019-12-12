import React from 'react';
import Typed from 'react-typed';

const TypedComponent = (props) => {
	return (
		<h1 className={'heading__primary'}>
			<Typed
				strings={[
					'Hi, I\'m Cosmas <span class="waving-hand">👋🏾</span>'
				]}
				typeSpeed={20}
			/>
		</h1>
	);
};

export default TypedComponent;
