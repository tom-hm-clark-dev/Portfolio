import { useParams } from "react-router-dom"
import projects from "../data/projects";
import Section from "../components/Section";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Subtitle from '../components/Subtitle'
import './ProjectsDetailsPage.css'
import { ProjectInfoCard } from "../components/ProjectInfoCard";

export function ProjectDetailsPage() {
  const {slug} = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }
  return (
    <>
    <Navbar />
      <Section
      id="hero"
      bg="dark"
      style={{
        backgroundImage: project.hero ?
        `url(${project.hero})`
        : undefined
      }}>
        <Row>
          <Col>
          <Subtitle project={project}></Subtitle>
            <h1>{project.title}</h1>
            <p>{project.excerpt}</p>
            <a className="btn" target="_blank" href={project.url}>View live site</a>
            <div className="project-info-grid">
              <ProjectInfoCard
              project={project}
              data={project.tech}></ProjectInfoCard>
            </div>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
          <p></p>
          </Col>
        </Row>
      </Section>
    </>
  )
}

export function GetRoles(project:typeof projects[number]) {
  return (
    <div className="info-container">
      <h3>Roles:</h3>
      <div className="info-row">
        {project.roles?.map((role) => (
          <span className="tag" key={role}>{role}</span>
        ))}
        <span></span>
      </div>
    </div>
  )
}

function GetTechnologies(project: typeof projects[number]) {
  return (
    <div className="info-container">
      <h3>Technologies used:</h3>
      <div className="info-row">
        {project.tech?.map((tech) =>
        <img key={tech} src={tech} className="platform-logo"></img>)}
      </div>
    </div>
  )
}

export default ProjectDetailsPage