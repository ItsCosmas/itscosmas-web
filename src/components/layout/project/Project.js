import React from 'react';
import './Project.scss';
import icons from '../../../assets/icons/sprite.svg';


const Project = props => {

    const { project } = props;

    let img;

    if(project.project_thumbnail == null){
        img = require('../../../assets/img/no_img.png');
    }else{
        // check if image corresponding to return thumbnail exist
        // assign it to img if exist and assign no_img if not exist
        try {
            img = require(`../../../assets/img/${project.project_thumbnail}`)
        }
        catch( e ) {
            if ( e.code === 'MODULE_NOT_FOUND' ) {
                img = require('../../../assets/img/no_img.png');
                
            }
        }
        
    }

    // Validate whether a link to live preview exists
    // If no link then disable anchorlink link
    // disabled anchorlinks are hidden by default with css
    let link_status = {}
    if (project.links.live === null || project.links.live === "") {
        link_status['disabled'] = true;
    }else{
        link_status['disabled'] = false;
    }

    
    return(
        <section className={'project'}>
            <div className="project__thumbnail">
                <img  src={img} alt="Convnet" className={'project__thumbnail-img'}/>
            </div>
            <div className="project__desc">
                <h4 className="content-title">{project.name}</h4>
                <p>{project.description}</p>
                <div className={'project-links'}>
                    <a href={project.links.source} className={'project-link'} target="_blank" rel="noopener noreferrer" >
                        <svg className={`project-link__icon`}>
                            <use xlinkHref={`${icons}#${'icon-code-fork'}`} />
                        </svg>
                        <span className={'btn u-center-text'}>Source &#8594;</span>
                    </a>
                    <a href={project.links.live} className={'project-link'} disabled={link_status['disabled']} target="_blank" rel="noopener noreferrer">
                        <svg className={`project-link__icon`}>
                            <use xlinkHref={`${icons}#${'icon-earth'}`} />
                        </svg>
                        <span className={'btn u-center-text'}>Visit &#8594;</span></a>
                </div>
            </div>
        </section>
    )
}
export default Project;