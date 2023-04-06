import { useNavigate, generatePath } from "react-router-dom";
import { Carousel, Container } from "react-bootstrap";
import great_change from '../../images/great_change.png';
import todo_app from '../../images/todo_app.png';
import movie_finder_1 from '../../images/movie_finder_1.jpg';
import mobileGC from '../../images/mobileGC.jpg';
import movie_finder_phone from '../../images/movie_finder_phone.jpg';
import mobileToDo from '../../images/mobileToDo.jpg';
import ProjectCard from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import './Projects.css';

const projects = [
  {
    title: 'Registration & Brand',
    description: 'Click to explore more',
    imgUrl: great_change,
    mobileImgUrl: mobileGC,
    id: 1,
  },
  {
    title: 'RESRTful API',
    description: 'Click to explore more',
    imgUrl: movie_finder_1,
    mobileImgUrl: movie_finder_phone,
    id: 2,
  },
  {
    title: 'Minimalistic & Useful',
    description: 'Click to explore more',
    imgUrl: todo_app,
    mobileImgUrl: mobileToDo,
    id: 3
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProceed = (id: number) => {
    navigate(generatePath("/projects/:id", { id: id.toString() }));
  };

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
              <Carousel.Item key={index}>
                <ProjectCard handleProceed={handleProceed} {...project} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
};

export default Projects;
