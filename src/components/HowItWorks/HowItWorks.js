import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>How It Works</h2>
          <div className="section-divider">
            <span></span>
            <i className="fas fa-truck"></i>
            <span></span>
          </div>
        </div>

        <div className="steps-wrapper">
          <div className="step-card">
            <div className="step-icon">
              <i className="fas fa-box-open"></i>
              <div className="step-number">01</div>
            </div>
            <h3>Input Details</h3>
            <p>Provide parcel information and delivery location for quick processing</p>
            <div className="step-features">
              <span><i className="fas fa-check-circle"></i> Easy form filling</span>
              <span><i className="fas fa-check-circle"></i> Quick estimation</span>
            </div>
          </div>

          <div className="steps-connection">
            <div className="connection-line"></div>
          </div>

          <div className="step-card active">
            <div className="step-icon">
              <i className="fas fa-route"></i>
              <div className="step-number">02</div>
            </div>
            <h3>Route Matching</h3>
            <p>Smart algorithm matches your delivery with available vehicles</p>
            <div className="step-features">
              <span><i className="fas fa-check-circle"></i> Optimal routing</span>
              <span><i className="fas fa-check-circle"></i> Real-time matching</span>
            </div>
          </div>

          <div className="steps-connection">
            <div className="connection-line"></div>
          </div>

          <div className="step-card">
            <div className="step-icon">
              <i className="fas fa-handshake"></i>
              <div className="step-number">03</div>
            </div>
            <h3>Smart Coordination</h3>
            <p>Automated coordination between users and vehicle owners</p>
            <div className="step-features">
              <span><i className="fas fa-check-circle"></i> Secure delivery</span>
              <span><i className="fas fa-check-circle"></i> Live tracking</span>
            </div>
          </div>
        </div>

        <div className="process-summary">
          <div className="summary-card">
            <div className="summary-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="summary-content">
              <h4>Quick Process</h4>
              <p>Get your delivery started in less than 5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;