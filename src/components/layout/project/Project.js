import React from 'react';
import './Project.scss';
import icons from '../../../assets/icons/sprite.svg';

const Project = (props) => {
	const { project } = props;

	const stack = project.stack.map((item, key) => (
		<span className={'text__highlight project__stack'} key={item}>
			{item}
		</span>
	));
	let img;

	if (project.project_thumbnail == null) {
		img = require('../../../assets/img/no_img.png');
	} else {
		// check if image corresponding to return thumbnail exist
		// assign it to img if exist and assign no_img if not exist
		try {
			img = require(`../../../assets/img/${project.project_thumbnail}`);
		} catch (e) {
			if (e.code === 'MODULE_NOT_FOUND') {
				img = require('../../../assets/img/no_img.png');
			}
		}
	}

	// live and source variables

	let live_status = {};
	let source_status = {};

	// Validate whether a link to live preview exists
	// If no link then disable anchorlink link
	// disabled anchorlinks are hidden by default with css

	if (project.links.live === null || project.links.live === '') {
		live_status['disabled'] = true;
	} else {
		live_status['disabled'] = false;
	}

	// Validate whether a link to source exists

	if (project.links.live === null || project.links.source === '') {
		source_status['disabled'] = true;
	} else {
		source_status['disabled'] = false;
	}

	return (
		<section className={'project'}>
			<div className='project__thumbnail'>
				<img
					src={img}
					alt='Convnet'
					className={'project__thumbnail--img'}
				/>
			</div>
			<div className='project__desc'>
				<h4 className='content-title'>{project.name}</h4>
				<p>{project.description}</p>
				<p className={'project-p-stack'}>{stack}</p>
				<div className={'project__links'}>
					<a
						href={project.links.source}
						className={'project__link'}
						disabled={source_status['disabled']}
						target='_blank'
						rel='noopener noreferrer'>
						<svg className={`project__link--icon`}>
							<use xlinkHref={`${icons}#${'icon-code-fork'}`} />
						</svg>
						<span className={'btn u-center-text'}>
							Source &#8594;
						</span>
					</a>
					<a
						href={project.links.live}
						className={'project__link'}
						disabled={live_status['disabled']}
						target='_blank'
						rel='noopener noreferrer'>
						<svg className={`project__link--icon`}>
							<use xlinkHref={`${icons}#${'icon-earth'}`} />
						</svg>
						<span className={'btn u-center-text'}>
							Visit &#8594;
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};
export default Project;
