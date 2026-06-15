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
            <div className='bg-overlay'></div>
            <div className='hover-overlay'>
                <div><p>View</p></div>
            </div>
            <div className="content">
                <div className='hidden'>
                    <img className="platform-logo" src={props.platform}></img>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard