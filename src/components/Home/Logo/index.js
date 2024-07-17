import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Logo = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    gsap.fromTo(logo, { opacity: 0 }, { opacity: 1, duration: 2 });

    return () => {
      if (logo) {
        gsap.killTweensOf(logo);
      }
    };
  }, []);

  return (
    <div className="logo" ref={logoRef}>
      <svg> {/* SVG Content */} </svg>
    </div>
  );
};

export default Logo;
