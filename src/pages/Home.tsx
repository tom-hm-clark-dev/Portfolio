import projects  from '../data/projects';
import ProjectCard from '../components/ProjectCard'
import Section from '../components/Section';
import Row from '../components/Row'
import Col from '../components/Col'
import Button from '../components/Button'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import cv from '../assets/Tom Clark CV-1.pdf'
import LinkedInLogo from '../assets/linkedin.svg'
import GithubLogo from '../assets/github.svg'

export function Home() {
  return (
    <>
      <Navbar />
      <Section 
      id="hero"
      bg="dark">
        <Row>
          <Col>
            <h1>Tom Clark: Front-End Web Developer</h1>
            <p>Lorem ipsum</p>
          </Col>
        </Row>
        <Row>
          <Button
          link="/projects"
          text="View my work"
          ></Button>
          <a className='btn' target='_blank' href={cv}>Download CV</a>
          <div className='hero-links-container'>
            <a target="_blank" href="/">
            <img 
            src={LinkedInLogo} 
            alt="LinkedIn Logo"
            className='platform-logo'>
            </img>
            </a>
            <a target="_blank" href="https://github.com/tom-hm-clark-dev">
            <img src={GithubLogo}
            className='platform-logo'
            alt="Github Logo">
            </img>
            </a>
          </div>
      </Row>
      </Section>
      <Section 
      id="projects"
      bg="light">
        <Row>
          <Col>
          <span className='heading-subtitle'>Projects</span>
            <h2>Some of my past work</h2>
          </Col>
        </Row>
        <Row
        styles='full-width carousel'>
          <Col>
          <Carousel>
              {projects.map(project => <ProjectCard 
              key={project.slug}
              {...project}/>)}
          </Carousel>
          </Col>
        </Row>
        <Row
        styles="projects-row">
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
