import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css';
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import sass from '../../images/sass.svg';
import react from '../../images/react.svg';
import javascript from '../../images/javascript.svg';
import typescript from '../../images/typescript.svg';
import responsive_web from '../../images/responsive_web.svg';
import git from '../../images/git.svg';
import github from '../../images/github_gray.svg';
import boostrap from '../../images/bootstrap.svg';
import rest_api from '../../images/rest_api.svg';
import mysql from '../../images/mysql.svg';

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2 className="skills_caption">Skills</h2>

              <p>
                <b>Hi, my name is Ernest!</b><br></br> I'm a junior frontend developer from Ukraine and I'd really love to work with you and implement a bunch of cool projects and features{")"}. Hope You'll find this portfolio interesting and if so, please, let me know in the contact section. And yeah, here's the list of skills that I have and used at least ones in real projects:
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <div>
                    <img src={html} alt="html"/>
                    <h5>HTML</h5>
                  </div>

                  <div>
                    <img src={css} alt="css"/>
                    <h5>CSS</h5>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <img src={sass} alt="sass"/>
                    <h5>Sass</h5>
                  </div>

                  <div>
                    <img src={react} alt="sass"/>
                    <h5>React</h5>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <img src={javascript} alt="javascript"/>
                    <h5>Javascript</h5>
                  </div>

                  <div>
                    <img src={typescript} alt="typescript"/>
                    <h5>Typescript</h5>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <img src={responsive_web} alt="responsive web"/>
                    <h5>Responsive Web</h5>
                  </div>
                  <div>
                    <img src={git} alt="git"/>
                    <h5>Git</h5>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <img src={github} alt="github"/>
                    <h5>Github</h5>
                  </div>
                  <div>
                    <img src={boostrap} alt="boostrap" />
                    <h5>Bootstrap</h5>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <img src={rest_api} alt="restful api"/>
                    <h5>RESTful API</h5>
                  </div>
                  <div>
                    <img src={mysql} alt="mysql database"/>
                    <h5>MySql</h5>
                  </div>
                </div>
                <div className="item"></div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Skills;
