import React from 'react';
import videoFile from '../assets/202504292314 (1).mp4';

const Hero = () => (
  <section className="hero">
    <div className="video-background">
      <video autoPlay muted loop playsInline>
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

export default Hero;
