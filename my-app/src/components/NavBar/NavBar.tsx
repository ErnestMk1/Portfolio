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
    <div className={scrolled ? "main-nav_div scrolled" : "main-nav_div"}>
      <div className="nav-logo_container">
        <img
          src={logo}
          alt="logo img"
          className="logo_img"
        />
      </div>
      <div className="nav-links_block">
        <a
          href="#home"
          className={activeLink === 'home' ? 'active navbar-link': "navbar-link"}
          onClick={() => setActiveLink('home')}
        >
          Home
        </a>
        <a
          href="#skills"
          className={activeLink === 'skills' ? 'active navbar-link': "navbar-link"}
          onClick={() => setActiveLink('skills')}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeLink === 'projects' ? 'active navbar-link': "navbar-link"}
          onClick={() => setActiveLink('projects')}
        >
          Projects
        </a>
      </div>
      <div className="social-media_block">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ernest-myrmyr-14b664255/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={navIcon1} alt="linkedin logo-link" />
          </a>
          <a
            href="mailto:ernmyr434@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="gmail logo-link" src={navIcon2} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/ernestmk12/"
          >
            <img alt="instagram logo-link" src={navIcon3} />
          </a>
        </div>
        <a
          href="#connect"
          className='button_link'
        >
          Let's Connect
        </a>
      </div>
    </div>
  );
};

export default NavBar;
