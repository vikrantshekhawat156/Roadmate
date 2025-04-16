import React from 'react';
import Hero from '../Hero/Hero';
import './SearchResults.css';

const SearchResults = () => {
  const drivers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3",
      rating: 4.8,
      vehicle: "Mini Truck - DL01AB1234",
      current: "Rohini, Delhi",
      destination: "Gurugram",
      time: "25 mins",
      phone: "+91 98765-43210",
      price: 850
    },
    {
      id: 2,
      name: "Suresh Verma",
      photo: "https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3",
      rating: 4.6,
      vehicle: "Pickup Van - HR02CD5678",
      current: "Noida, UP",
      destination: "Delhi",
      time: "40 mins",
      phone: "+91 98765-43211",
      price: 950
    }
  ];

  return (
    <>
      <Hero isSearchPage={true} />
      <section className="search-results-section">
        <div className="container">
          <div className="row">
            {/* Filters section */}
            <div className="col-lg-3">
              <div className="filters-card">
                <h3 className="mb-4">Filters</h3>
                <div className="filter-group">
                  <h4>Vehicle Type</h4>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="mini" />
                    <label className="form-check-label">Mini Truck</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="pickup" />
                    <label className="form-check-label">Pickup Van</label>
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Price Range</h4>
                  <input type="range" className="form-range" min="0" max="10000" />
                  <div className="price-labels">
                    <span>₹0</span>
                    <span>₹10,000</span>
                  </div>
                </div>

                <div className="filter-group">
                  <h4>Driver Rating</h4>
                  <select className="form-select">
                    <option>All Ratings</option>
                    <option>4+ Stars</option>
                    <option>3+ Stars</option>
                  </select>
                </div>

                <button className="btn btn-primary w-100">Apply Filters</button>
              </div>
            </div>

            {/* Results section */}
            <div className="col-lg-9">
              <div className="search-results-header">
                <h2 className="m-0">Available Drivers</h2>
                <select className="form-select sort-select">
                  <option>Sort by: Nearest</option>
                  <option>Price: Low to High</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>

              <div className="drivers-grid">
                {drivers.map(driver => (
                  <div key={driver.id} className="driver-card">
                    <div className="driver-photo">
                      <img src={driver.photo} alt={driver.name} />
                      <span className="rating">
                        <i className="fas fa-star"></i> {driver.rating}
                      </span>
                    </div>
                    <div className="driver-info">
                      <h3>{driver.name}</h3>
                      <div className="vehicle-info">
                        <i className="fas fa-truck"></i>
                        <span>{driver.vehicle}</span>
                      </div>
                      <div className="route-info">
                        <div>
                          <i className="fas fa-location-dot"></i>
                          <span>Current: {driver.current}</span>
                        </div>
                        <div>
                          <i className="fas fa-map-marker-alt"></i>
                          <span>Going to: {driver.destination}</span>
                        </div>
                      </div>
                      <div className="time-info">
                        <i className="fas fa-clock"></i>
                        <span>Arrives in: {driver.time}</span>
                      </div>
                      <div className="contact-info">
                        <i className="fas fa-phone"></i>
                        <span>{driver.phone}</span>
                      </div>
                    </div>
                    <div className="booking-options">
                      <div className="price">₹{driver.price}</div>
                      <button className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResults;