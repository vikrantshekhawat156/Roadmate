import React from 'react';
import images from '../../constants/images';
import './Download.css';

const Download = () => {
  return (
    <section id="download" className="py-4">
      <div className="container">
        <h2 className="text-center mb-4">Download Our App</h2>
        <div className="download-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="download-content">
                <h3>Get Started with Road Mate</h3>
                <p className="lead mb-4">
                  Download our app and experience seamless shipping solutions at your fingertips.
                </p>
                <ul className="feature-list">
                  <li><i className="fas fa-check"></i> Real-time tracking</li>
                  <li><i className="fas fa-check"></i> Smart route matching</li>
                  <li><i className="fas fa-check"></i> Secure payments</li>
                  <li><i className="fas fa-check"></i> 24/7 Support</li>
                </ul>
                <div className="download-buttons">
                  <a href="#" className="store-button">
                    <img src={images.badges.appStore} alt="Download on App Store" />
                  </a>
                  <a href="#" className="store-button">
                    <img src={images.badges.googlePlay} alt="Get it on Google Play" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="app-showcase">
                <img src={images.appShowcase} alt="Road Mate App" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;