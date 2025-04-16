import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = ({ isSearchPage = false }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    date: '',
    vehicleType: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(formData).toString();
    navigate(`/search-results?${queryString}`);
  };

  return (
    <header className={`hero ${isSearchPage ? 'search-hero' : ''}`}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center mb-5">
            <h1 className="animate fade-in-up">
              {isSearchPage ? 'Search Results' : 'Welcome to Road Mate'}
            </h1>
            <p className="lead animate fade-in-up delay-1">
              {isSearchPage 
                ? 'Find the perfect vehicle for your journey' 
                : 'Your Ultimate Travel Companion'}
            </p>
          </div>
        </div>
      </div>
      <div className="search-form-wrapper animate fade-in-up delay-2">
        <form className="search-form" onSubmit={handleSearch}>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="form-group">
                <label>Pickup Location</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="pickup"
                  value={formData.pickup}
                  onChange={handleInputChange}
                  placeholder="Enter pickup location" 
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label>Destination</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Enter destination" 
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label>Date</label>
                <input 
                  type="date" 
                  className="form-control" 
                  id="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label>Vehicle Type</label>
                <select 
                  className="form-select" 
                  id="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="mini">Mini Truck</option>
                  <option value="pickup">Pickup Van</option>
                  <option value="truck">Heavy Truck</option>
                  <option value="container">Container</option>
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label className="invisible">Search</label>
                <button type="submit" className="btn-search">
                  <i className="fas fa-search me-2"></i>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Hero;