import {Link} from 'react-router-dom';

type ProjectCardProps = {
    slug: string;
    platform: string;
    title: string;
    excerpt: string;
    url: string;
}

export function ProjectCard( props: ProjectCardProps ) {
    return (
        <Link to={`/project/${props.slug}`}>
            <div className="project-card">
                <div className="content">
                    <div className="row">
                        <img className="platform-logo" src={props.platform}></img>
                        <h3>{props.title}</h3>
                    </div>
                    {props.excerpt}
                    <p>View</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard