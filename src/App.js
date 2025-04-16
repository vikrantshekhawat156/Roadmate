import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Features from './components/Features/Features';
import KeyFeatures from './components/KeyFeatures/KeyFeatures';
import Team from './components/Team/Team';
import Market from './components/Market/Market';
import Roadmap from './components/Roadmap/Roadmap';
import Download from './components/Download/Download';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';
import SearchResults from './components/SearchResults/SearchResults';
import './assets/styles/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  return (
    <>
      <Hero />
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
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
