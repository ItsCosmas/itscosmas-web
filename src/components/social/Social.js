import React from 'react';
import icons from '../../assets/icons/sprite.svg';
import './Social.scss';

const Social = () => {
	return (
		<div className={'social'}>
			<ul className={'social__list'}>
				<li className={'social__list--item'}>
					<a
						href={`https://github.com/ItsCosmas`}
						target={'_blank'}
						className={'social__list--link'}>
						<svg
							className={`social__list--icon fill--prussianBlue`}>
							<use xlinkHref={`${icons}#${'icon-github'}`} />
						</svg>
						<span className={'u-center-text'}>github</span>
					</a>
				</li>
				<li className={'social__list--item'}>
					<a
						href={`https://linkedin.com/in/cosmasgikunju/`}
						target={'_blank'}
						className={'social__list--link'}>
						<svg
							className={`social__list--icon fill--prussianBlue`}>
							<use xlinkHref={`${icons}#${'icon-linkedin'}`} />
						</svg>
						<span className={'u-center-text'}>linkedin</span>
					</a>
				</li>
				<li className={'social__list--item'}>
					<a
						href={`https://dev.to/itscosmas`}
						target={'_blank'}
						className={'social__list--link'}>
						<svg
							className={`social__list--icon fill--prussianBlue`}>
							<use xlinkHref={`${icons}#${'icon-dev-dot-to'}`} />
						</svg>
						<span className={'u-center-text'}>dev</span>
					</a>
				</li>
				<li className={'social__list--item'}>
					<a
						href={`https://medium.com/@gikunjucosmas`}
						target={'_blank'}
						className={'social__list--link'}>
						<svg
							className={`social__list--icon fill--prussianBlue`}>
							<use xlinkHref={`${icons}#${'icon-medium'}`} />
						</svg>
						<span className={'u-center-text'}>medium</span>
					</a>
				</li>
				<li className={'social__list--item'}>
					<a
						href={`https://drive.google.com/file/d/1BU4iuL-txtj4GdldykoBkFBiAoBt_XuJ/view?usp=sharing`}
						target={'_blank'}
						className={'social__list--link'}>
						<svg
							className={`social__list--icon fill--prussianBlue`}>
							<use xlinkHref={`${icons}#${'icon-newspaper'}`} />
						</svg>
						<span className={'text--black u-center-text'}>
							resume
						</span>
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Social;
