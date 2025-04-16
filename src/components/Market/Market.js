import React from 'react';
import './Market.css';

const Market = () => {
  return (
    <section id="market-potential" className="py-4 bg-gradient">
      <div className="container">
        <h2 className="text-center mb-4">Market Potential</h2>
        <div className="market-wrapper">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="market-stat-card animate fade-in-up delay-1">
                <div className="stat-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="stat-info">
                  <h3>INR 3.5L Cr</h3>
                  <p>Expected Market Size by 2024</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="market-stat-card active animate fade-in-up delay-1">
                <div className="stat-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="stat-info">
                  <h3>INR 4.6L Cr</h3>
                  <p>Projected Market Size by 2029</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="market-stat-card animate fade-in-up delay-1">
                <div className="stat-icon">
                  <i className="fas fa-arrow-trend-up"></i>
                </div>
                <div className="stat-info">
                  <h3>31.4%</h3>
                  <p>Growth Rate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="market-description text-center mt-4">
            <p className="lead">
              The global parcel delivery market is set to reach around INR 3.5 lakh crore by 2024 
              and INR 4.6 lakh crore by 2029. Our platform is well-placed to benefit from this growth, 
              catering to the changing needs of modern users and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;