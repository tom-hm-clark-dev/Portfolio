import projects  from '../data/projects';
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section';
import Row from '../components/Row'
import Col from '../components/Col'
import Button from '../components/Button'

export function Home() {
  return (
    <>
      <Section 
      id="hero"
      bg="dark">
        <Row>
          <Col>
            <h1>Tom Clark: Front-End Web Developer</h1>
            <p>Lorem ipsum</p>
            <Button
            link="#projects"
            text="View my work"
            ></Button>
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
                {...project}/>)}
              </div>
            </Col>
          </Row>
      </Section>
    </>
  )
}

export default Home
