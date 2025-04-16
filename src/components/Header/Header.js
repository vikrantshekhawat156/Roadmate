import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import images from '../../constants/images';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    phone: '',
    otp: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Phone:', phoneNumber, 'OTP:', otp);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup data:', signupData);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log('Google login clicked');
  };

  const sendOTP = () => {
    // Handle OTP sending logic
    console.log('Sending OTP to:', phoneNumber || signupData.phone);
    setShowOTP(true);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={images.logo} alt="Road Mate Logo" className="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><Link className="nav-link" to="/#about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#features">Features</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#team">Team</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/#contact">Contact</Link></li>
              <li className="nav-item auth-buttons">
                <button className="login-btn" onClick={() => setShowLogin(true)}>
                  <i className="fas fa-sign-in-alt me-2"></i>
                  Login
                </button>
         
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to Road Mate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <div className="input-group">
                <span className="input-group-text">+91</span>
                <input
                  type="tel"
                  className="form-control"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  maxLength="10"
                />
              </div>
            </div>
            {showOTP && (
              <div className="mb-3">
                <label className="form-label">OTP</label>
                <input
                  type="text"
                  className="form-control"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                  placeholder="Enter OTP"
                  maxLength="6"
                />
              </div>
            )}
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={showOTP ? handleLoginSubmit : sendOTP}
            >
              {showOTP ? 'Login' : 'Get OTP'}
            </button>
          </form>
          
          <div className="mt-4">
            <div className="divider">
              <span>OR</span>
            </div>
            
            <button type="button" className="google-login-btn mt-4" onClick={handleGoogleLogin}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                alt="Google"
                className="google-icon" 
              />
              Continue with Google
            </button>
          </div>

          <p className="text-center mt-3">
            Don't have an account?{' '}
            <button
              className="btn-link"
              onClick={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            >
              Sign Up
            </button>
          </p>
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSignupSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={signupData.name}
                onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={signupData.email}
                onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <div className="input-group">
                <span className="input-group-text">+91</span>
                <input
                  type="tel"
                  className="form-control"
                  value={signupData.phone}
                  onChange={(e) => setSignupData({...signupData, phone: e.target.value})}
                  placeholder="Enter your phone number"
                  maxLength="10"
                />
              </div>
            </div>
            {showOTP && (
              <div className="mb-3">
                <label className="form-label">OTP</label>
                <input
                  type="text"
                  className="form-control"
                  value={signupData.otp}
                  onChange={(e) => setSignupData({...signupData, otp: e.target.value})}
                  placeholder="Enter OTP"
                  maxLength="6"
                />
              </div>
            )}
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={showOTP ? handleSignupSubmit : sendOTP}
            >
              {showOTP ? 'Sign Up' : 'Get OTP'}
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account?{' '}
            <button
              className="btn-link"
              onClick={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            >
              Login
            </button>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;