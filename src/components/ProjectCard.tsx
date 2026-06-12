import {Link} from 'react-router-dom';

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
        <Link to={`/project/${props.slug}`}>
            <div className="project-card"
            style={{
            background: props.hero ?
            `url(${props.hero})`
            : undefined
            }}>
                <div className='overlay'></div>
                <div className="content">
                    <div className="row">
                        <img className="platform-logo" src={props.platform}></img>
                        <h3>{props.title}</h3>
                    </div>
                    <p>{props.excerpt}</p>
                    <span>View</span>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard