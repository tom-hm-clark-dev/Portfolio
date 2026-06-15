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
              dataType="tech">
              </ProjectInfoCard>
              <ProjectInfoCard
              project={project}
              dataType="roles"/>
            </div>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
          {project.content?.map((block, index) => (
            <div key={index}>
              {block.type === "heading" && <h2>{block.text}</h2>}
              {block.type === "body" && <p>{block.text}</p>}
            </div>
          ))}
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default ProjectDetailsPage