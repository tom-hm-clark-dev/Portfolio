import { useParams } from "react-router-dom"
import projects from "../data/projects";

export function ProjectDetailsPage() {
  const {slug} = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }
  return (
    <section>
      <div className="row">
        <div className="col">
          <h1>{project.title}</h1>
          <p>{project.excerpt}</p>
          {project.images?.map((image) => (
            <img key={project.slug} src={image}></img>
          ))}
        </div>
      </div>

    </section>
  )
}

export default ProjectDetailsPage