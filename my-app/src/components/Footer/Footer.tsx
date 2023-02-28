import { Container, Row, Col } from "react-bootstrap";
import logo from '../../images/logo.png';
import navIcon1 from '../../images/nav-icon1.svg';
import navIcon2 from '../../images/nav-icon2.svg';
import navIcon3 from '../../images/nav-icon3.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="container_footer">
        <Row className="align-item-center footerRow">
          <Col className="logo_block" sm={6}>
            <img
              src={logo}
              alt='footer logo'
              className="footer_logo"
            />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
