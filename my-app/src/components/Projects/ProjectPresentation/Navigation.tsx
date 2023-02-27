import './ProjectPresentation.css';
import { useState, useEffect } from 'react';
import arrow1 from '../../../images/arrow1.svg';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScroll]);

  const handleBtnClick = () => {
    navigate('/');
  };

  return (
    <div className={`navigation ${scrolled ? "scrolled" : ''}`}>
      <button onClick={handleBtnClick}className="navigation-button">
        <img src={arrow1} alt="go back arrow" />
        Go Back
      </button>
    </div>
  );
};

export default Navigation;
