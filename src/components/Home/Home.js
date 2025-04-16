import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import HowItWorks from '../HowItWorks/HowItWorks';
import Features from '../Features/Features';
import KeyFeatures from '../KeyFeatures/KeyFeatures';
import Team from '../Team/Team';
import Market from '../Market/Market';
import Roadmap from '../Roadmap/Roadmap';
import Download from '../Download/Download';
import Support from '../Support/Support';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero isSearchPage={false} />
      <About />
      <HowItWorks />
      <Features />
      <KeyFeatures />
      <Team />
      <Market />
      <Roadmap />
      <Download />
      <Support />
    </>
  );
};

export default Home;