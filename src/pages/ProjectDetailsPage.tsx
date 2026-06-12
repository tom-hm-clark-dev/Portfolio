import { useParams } from "react-router-dom"
import projects from "../data/projects";
import Section from "../components/Section";
import Row from "../components/Row";
import Col from "../components/Col";

export function ProjectDetailsPage() {
  const {slug} = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }
  return (
    <>
      <Section
      id="hero"
      bg="dark"
      style={{
        backgroundImage: project.images?.[0] ?
        `url(${project.images[0]})`
        : undefined
      }}>
        <Row>
          <Col>
            <h1>{project.title}</h1>
            <p>{project.excerpt}</p>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col>
          <p>f</p>
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default ProjectDetailsPage