import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="py-4 bg-gradient">
      <div className="container">
        <h2 className="text-center mb-4">Features</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="feature-box text-center animate fade-in-up delay-1">
              <i className="fas fa-truck mb-3"></i>
              <h4>Smart Matching</h4>
              <p>Intelligent system that connects users with vehicle owners based on routes and requirements.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box text-center animate fade-in-up delay-1">
              <i className="fas fa-route mb-3"></i>
              <h4>Return Load Booking</h4>
              <p>Help vehicle owners secure return bookings, maximizing efficiency and reducing empty returns.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box text-center animate fade-in-up delay-1">
              <i className="fas fa-shield-alt mb-3"></i>
              <h4>Secure Shipping</h4>
              <p>Safe and reliable parcel delivery with real-time tracking and delivery confirmation.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box text-center animate fade-in-up delay-2">
              <i className="fas fa-calculator mb-3"></i>
              <h4>Dynamic Pricing</h4>
              <p>Transparent and competitive pricing based on distance, load, and vehicle type.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box text-center animate fade-in-up delay-2">
              <i className="fas fa-comments mb-3"></i>
              <h4>Direct Communication</h4>
              <p>Built-in messaging system for seamless coordination between users and vehicle owners.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="feature-box text-center animate fade-in-up delay-2">
              <i className="fas fa-headset mb-3"></i>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer support for assistance and issue resolution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;