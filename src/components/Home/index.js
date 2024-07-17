import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import Logo from './Logo';
import gsap from 'gsap';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const homeRef = useRef(null);

  const nameArray = ['m', 'm', 'a', 'n', 'u', 'e', 'l'];
  const jobArray = [
    'f', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k', ' ',
    'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'
  ];

  useEffect(() => {
    const home = homeRef.current;
    gsap.fromTo(home, { opacity: 0 }, { opacity: 1, duration: 2 });

    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timer);
      if (home) {
        gsap.killTweensOf(home);
      }
    };
  }, []);

  return (
    <>
      <div className="container home-page" ref={homeRef}>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / JavaScript Expert / React</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
