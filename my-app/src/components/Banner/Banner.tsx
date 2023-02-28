import { useState, useEffect } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../../images/DVD_logo.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';

const Banner = () => {
  const toRotate = ['Front Dev', 'React Developer', 'Web Developer'];

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  });

  return (
    <div className="banner" id="home">
      <div className="banner-container">
        <div className="welcome-block">
          <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__pulse banner_box' : 'banner_box'}>
              <span className="tagline">
                Welcome to my Portfolio
              </span>
              <h1>
                {`Hi, I'm `}<span className="wrap">{text}</span>
              </h1>
              <p>Hello! I'm really glad you're here! My name's Ernest and I'm 19. I like to code and play guitar{")"}</p>
              <button className="LetsConnectbtn"><a href="#connect">Let's Connect <ArrowRightCircle size={25}/></a></button>
            </div>
          }
          </TrackVisibility>
        </div>

        <div className="header-img-div">
          <img src={headerImg} alt="Header Img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
