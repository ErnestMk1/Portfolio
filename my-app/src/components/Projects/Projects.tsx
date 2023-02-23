import { Carousel, Container } from "react-bootstrap";
import projImg3 from '../../images/project-img3.png';
import great_change from '../../images/great_change.png';
import todo_app from '../../images/todo_app.png';
import ProjectCard from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Registration & Brand',
      description: 'Click to explore more',
      imgUrl: great_change,
    },
    {
      title: 'Minimalistic & Useful',
      description: 'Click to explore more',
      imgUrl: todo_app,
    },
    {
      title: 'RESRTful API',
      description: 'Click to explore more',
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container fluid className="projects-container">
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={ isVisible ? "animate__animated animate__bounce" : ""}>
            <h2>Projects</h2>
          </div>
          }
        </TrackVisibility>
        <Carousel interval={null} indicators={false}>
          {projects.map((project, index) => {
            return (
              <Carousel.Item>
                <ProjectCard key={index} {...project} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
};

export default Projects;
