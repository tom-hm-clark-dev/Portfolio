import Section from '../components/Section'
import Row from '../components/Row'
import Col from '../components/Col'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

export function ProjectsPage() {
  return (
    <>
      <Section
      id="hero"
      bg="dark">
        <Row>
          <Col>
          <h1>Projects</h1>
          <p>Lorem ipsum</p>
          </Col>
        </Row>
      </Section>
      <Section
      id="projects"
      bg="light">
        <Row>
          <Col>
          <div className='projects-grid'>
            {projects.map(project => <ProjectCard 
            key={project.slug}
            {...project}></ProjectCard>)}
          </div>
          </Col>
        </Row>
      </Section>
    </>
  )
}

export default ProjectsPage