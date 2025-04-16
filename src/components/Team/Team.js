import React from 'react';
import images from '../../constants/images';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>Leadership Team</h2>
          <div className="section-divider">
            <span></span>
            <i className="fas fa-users"></i>
            <span></span>
          </div>
          <p className="section-subtitle">Driving Innovation in Logistics Technology</p>
        </div>

        <div className="team-container">
          {/* Team Member 1 */}
          <div className="team-card" data-aos="fade-up">
            <div className="card-inner">
              <div className="card-front">
                <div className="member-image">
                  <img src={images.team.ravindra} alt="Ravindra Singh" />
                </div>
                <div className="member-details">
                  <h3>Ravindra Singh</h3>
                  <span className="title">Founder & CEO</span>
                  <div className="expertise-badges">
                    <span>Full Stack</span>
                    <span>Architecture</span>
                    <span>Leadership</span>
                  </div>
                </div>
              </div>
              <div className="card-back">
                <div className="member-bio">
                  <h4>Background</h4>
                  <p>13+ years of expertise in building scalable applications and leading technical teams.</p>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <span className="stat-number">13+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">50+</span>
                      <span className="stat-label">Projects Delivered</span>
                    </div>
                  </div>
                  <div className="social-links">
                    <a href="#" className="social-link linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-link github">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="social-link twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-inner">
              <div className="card-front">
                <div className="member-image">
                  <img src={images.team.vikrant} alt="Vikrant Shekhawat" />
                </div>
                <div className="member-details">
                  <h3>Vikrant Shekhawat</h3>
                  <span className="title">Co-Founder & CTO</span>
                  <div className="expertise-badges">
                    <span>UI/UX</span>
                    <span>Strategy</span>
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
              <div className="card-back">
                <div className="member-bio">
                  <h4>Background</h4>
                  <p>9+ years of experience in crafting user experiences and leading product strategy.</p>
                  <div className="stats-grid">
                    <div className="stat-item">
                      <span className="stat-number">9+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">30+</span>
                      <span className="stat-label">Products Designed</span>
                    </div>
                  </div>
                  <div className="social-links">
                    <a href="#" className="social-link linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="social-link dribbble">
                      <i className="fab fa-dribbble"></i>
                    </a>
                    <a href="#" className="social-link twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
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

export default Team;