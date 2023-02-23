import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../../images/logo.png';
import navIcon1 from '../../images/nav-icon1.svg';
import navIcon2 from '../../images/nav-icon2.svg';
import navIcon3 from '../../images/nav-icon3.svg';
import './NavBar.css';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScroll]);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="logo img"
            className="logo_img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link': "navbar-link"}
              onClick={() => setActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link': "navbar-link"}
              onClick={() => setActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link': "navbar-link"}
              onClick={() => setActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/ernest-myrmyr-14b664255/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="mailto:ernmyr434@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={navIcon2} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/ernestmk12/"
              >
                <img alt="" src={navIcon3} />
              </a>
            </div>
            <Nav.Link
              href="#connect"
              className='button_link'
            >
              Let's Connect
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
