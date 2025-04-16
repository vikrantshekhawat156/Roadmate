import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
  return (
    <section id="key-features" className="key-features-section">
      <div className="container">
        <div className="section-header">
          <h2>Key Features</h2>
          <div className="section-divider">
            <span></span>
            <i className="fas fa-star"></i>
            <span></span>
          </div>
          <p className="section-subtitle">Empowering your logistics experience</p>
        </div>

        <div className="features-grid">
          <div className="feature-card" data-aos="fade-up">
            <div className="feature-icon">
              <i className="fas fa-truck-fast"></i>
            </div>
            <div className="feature-content">
              <h3>Quick Delivery</h3>
              <p>Fast and efficient delivery service across multiple cities</p>
              <ul className="feature-details">
                <li><i className="fas fa-check"></i> Same-day delivery</li>
                <li><i className="fas fa-check"></i> Real-time tracking</li>
                <li><i className="fas fa-check"></i> Route optimization</li>
              </ul>
            </div>
          </div>

          <div className="feature-card active" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="feature-content">
              <h3>Secure Platform</h3>
              <p>Enhanced security measures for safe transactions</p>
              <ul className="feature-details">
                <li><i className="fas fa-check"></i> Verified drivers</li>
                <li><i className="fas fa-check"></i> Safe payments</li>
                <li><i className="fas fa-check"></i> Package insurance</li>
              </ul>
            </div>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-icon">
              <i className="fas fa-route"></i>
            </div>
            <div className="feature-content">
              <h3>Smart Routing</h3>
              <p>Intelligent route planning and optimization</p>
              <ul className="feature-details">
                <li><i className="fas fa-check"></i> AI-powered routing</li>
                <li><i className="fas fa-check"></i> Multiple stops</li>
                <li><i className="fas fa-check"></i> Load optimization</li>
              </ul>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;