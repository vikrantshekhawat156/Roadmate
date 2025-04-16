import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-info">
                <img src="/images/logo.png" alt="Road Mate Logo" className="footer-logo mb-3" />
                <p className="footer-text">
                  Your trusted companion for all your travel needs. Making journeys safer, 
                  more comfortable, and enjoyable with innovative features.
                </p>
                <div className="social-links mt-4">
                  <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="me-3"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#team">Our Team</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Parcel Delivery</a></li>
                  <li><a href="#">Route Optimization</a></li>
                  <li><a href="#">Real-time Tracking</a></li>
                  <li><a href="#">24/7 Support</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-contact">
                <h4>Contact Info</h4>
                <p><i className="fas fa-map-marker-alt"></i> C - 18, T.C. NAGAR, JOTHWARA<br />Jaipur, Rajasthan</p>
                <p><i className="fas fa-envelope"></i> info@roadmate.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-content">
                <div className="copyright">
                  <p>&copy; 2024 ROAD MATE. All Rights Reserved.</p>
                </div>
                <div className="footer-bottom-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">FAQ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;