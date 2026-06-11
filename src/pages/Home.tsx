import projects  from '../data/projects';
import ProjectCard from '../components/ProjectCard'
import { Section } from '../components/Section';

export function Home() {
  return (
    <>
      <Section bg="dark">
        <div className='hero'>
          <h1>Tom Clark: Front-End Web Developer</h1>
          <p>Lorem ipsum</p>
          <a href="#projects">View my work</a>
        </div>
      </Section>
      <section id="projects">
          <div className='row'>
            <div className='col'>
              <div className='projects-grid'>
                {projects.map(project => <ProjectCard 
                key={project.slug}
                {...project}/>)}
              </div>
            </div>
          </div>
      </section>
    </>
  )
}

export default Home
