import {Link} from 'react-router-dom';
import './ProjectCard.css'

type ProjectCardProps = {
    slug: string;
    platform: string;
    title: string;
    excerpt: string;
    url: string;
    hero?: string;

}

export function ProjectCard( props: ProjectCardProps ) {
    return (
        <Link 
        className="project-card" 
        style={{
            background: props.hero ?
            `url(${props.hero})`
            : undefined
            }} 
            to={`/project/${props.slug}`}>
            <div className='overlay'></div>
            <div className="content">
                <div>
                    <img className="platform-logo" src={props.platform}></img>
                    <h3>{props.title}</h3>
                </div>
                <div className='hidden'>
                    <p>{props.excerpt}</p>
                    <span>View</span>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard