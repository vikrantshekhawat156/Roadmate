import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <section id="support" className="support-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>24/7 Customer Support</h2>
          <div className="section-divider">
            <span></span>
            <i className="fas fa-headset"></i>
            <span></span>
          </div>
          <p className="section-subtitle">We're here to help you every step of the way</p>
        </div>

        <div className="support-grid">
          {/* Emergency Support */}
          <div className="support-card" data-aos="fade-up">
            <div className="card-header">
              <div className="icon-wrapper">
                <i className="fas fa-phone-volume"></i>
              </div>
              <h3>Emergency Support</h3>
            </div>
            <div className="card-content">
              <p>24/7 immediate assistance for urgent matters</p>
              <div className="contact-info">
                <div className="phone">
                  <i className="fas fa-phone"></i>
                  <span>+91 1800-123-4567</span>
                </div>
                <button className="support-btn">
                  Call Now
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Live Chat Support */}
          <div className="support-card active" data-aos="fade-up" data-aos-delay="100">
            <div className="card-header">
              <div className="icon-wrapper">
                <i className="fas fa-comments"></i>
              </div>
              <h3>Live Chat Support</h3>
            </div>
            <div className="card-content">
              <p>Connect with our support team instantly</p>
              <div className="status-info">
                <div className="status">
                  <span className="status-dot"></span>
                  <span>Agents Online</span>
                </div>
                <button className="support-btn">
                  Start Chat
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;