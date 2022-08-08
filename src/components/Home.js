import React from 'react';
import "./Home.css";
import IMG1 from "../Assets/Mobile Phone.png";
import IMG2 from "../Assets/Mobile Phone Overlay.png";
import ARROW from "../Assets/Get Started Icon.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-description">
        <div>
        <p className='home-heading'>
          Transform ardous technology into your <span>digital</span> visionary
        </p>
        </div>
        <div className="line"></div>
        <div>
          <p className='home-summary'>
            A connoisseur in consulting, training, digital transformation,technology, and engineering services. Large enterprise organizations and companies with unusual or highly specialized requirements find Tvast IT Solutions to be the perfect partner for their business.
          </p>
        </div>
        <div className='home-get-started'>
          <span>Get Started</span>
          <img src={ARROW} alt="get-started" />
        </div>
      </div>
      <div className="home-mobile-img">
        <img src={IMG1} className="mobile-phone" alt="mobile" />
        <img src={IMG2} className="mobile-overlay" alt="mobile-overlay" />
      </div>
    </div>
  )
}

export default Home