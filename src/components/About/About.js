import React from 'react';
import images from '../../constants/images';
    import './About.css';

const About = () => {
  return (
    <section id="about" className="py-4">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <img src={images.about} alt="About Road Mate" className="img-fluid rounded" />
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h3>Revolutionizing Shipping Industry</h3>
              <p className="lead mb-4">
                Our platform revolutionizes the shipping industry by directly connecting users with vehicle owners, 
                streamlining logistics and eliminating inefficiencies.
              </p>
              <div className="market-highlights mt-4">
                <div className="highlight-box">
                  <i className="fas fa-chart-line"></i>
                  <div className="highlight-text">
                    <h4>USD 48.27B</h4>
                    <p>Market Size by 2024</p>
                  </div>
                </div>
                <div className="highlight-box">
                  <i className="fas fa-rocket"></i>
                  <div className="highlight-text">
                    <h4>USD 62.95B</h4>
                    <p>Projected by 2029</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="about-features">
              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <div className="about-feature-item">
                    <i className="fas fa-handshake"></i>
                    <h5>Strategic Partnerships</h5>
                    <p>Building strong industry relationships</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="about-feature-item">
                    <i className="fas fa-percentage"></i>
                    <h5>Commission Based</h5>
                    <p>Transparent revenue model</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="about-feature-item">
                    <i className="fas fa-crown"></i>
                    <h5>Premium Services</h5>
                    <p>Enhanced subscription options</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="about-feature-item">
                    <i className="fas fa-users"></i>
                    <h5>Dedicated Team</h5>
                    <p>Expert leadership and support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;