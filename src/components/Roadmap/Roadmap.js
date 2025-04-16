import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-4 bg-gradient-alt">
      <div className="container">
        <h2 className="text-center mb-4">Roadmap</h2>
        <div className="roadmap-wrapper">
          <div className="roadmap-grid">
            <div className="roadmap-item animate fade-in-up">
              <div className="roadmap-number">01</div>
              <div className="roadmap-content">
                <i className="fas fa-code"></i>
                <h4>Platform Development</h4>
                <p>Develop and refine the platform through beta testing to ensure user-friendliness and functionality.</p>
              </div>
            </div>
            <div className="roadmap-item animate fade-in-up delay-1">
              <div className="roadmap-number">02</div>
              <div className="roadmap-content">
                <i className="fas fa-rocket"></i>
                <h4>Pilot Programs</h4>
                <p>Initiate pilot programs in targeted regions to validate concept and gather user feedback.</p>
              </div>
            </div>
            <div className="roadmap-item animate fade-in-up delay-2">
              <div className="roadmap-number">03</div>
              <div className="roadmap-content">
                <i className="fas fa-chart-line"></i>
                <h4>Scale Operations</h4>
                <p>Scale operations gradually, focusing on areas with high demand and potential for growth.</p>
              </div>
            </div>
            <div className="roadmap-item animate fade-in-up delay-3">
              <div className="roadmap-number">04</div>
              <div className="roadmap-content">
                <i className="fas fa-globe"></i>
                <h4>Market Expansion</h4>
                <p>Expand market reach strategically, considering factors like user demographics and shipping demands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;