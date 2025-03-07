import React from 'react';

const Home = () => (
  <div className="main-content">
    <div className="center-content">
      <div className="profile-image animate delay-1">
        <img src={`${process.env.PUBLIC_URL}/cover.png`} alt="portrait" />
      </div>
      <div className="bio">
        <h1 className="name animate delay-2">Darren Yu</h1>
        <p className="title animate delay-2">Developer &amp; Designer</p>
        <div className="social-links animate delay-3">
          <a href="mailto:darrenyu90@gmail.com" className="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          <a href="https://www.instagram.com/yume.arw?igsh=MzRlODBiNWFlZA==" className="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="https://github.com/YuMe-02" className="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/darren-yu-88341218b/" className="social-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <div className="right-panel">
      <div className="info-section animate delay-3">
        <div className="info-label">EDUCATION</div>
        <div className="info-value">B.S. in Computer Engineering</div>
        <div className="info-detail">UC Santa Cruz • 2020-2024</div>
      </div>

      <div className="info-section animate delay-3">
        <div className="info-label">LOCATION</div>
        <div className="info-value">San Francisco, California</div>
      </div>

      <div className="info-section animate delay-3">
        <div className="info-label">SEEKING</div>
        <div className="info-value">Frontend, Full Stack</div>
        <div className="info-detail">Software Engineering roles</div>
      </div>

      <div className="cta-buttons animate delay-4">
        <a href="https://drive.google.com/file/d/1a-KnvyQ9xiMCa5Ly4rTz1u83eKreP0kZ/view?usp=sharing" className="btn btn-outline">Resume</a>
        <a href="https://drive.google.com/file/d/1a-KnvyQ9xiMCa5Ly4rTz1u83eKreP0kZ/view?usp=sharing" className="btn btn-filled">Photography</a>
      </div>
    </div>
  </div>
);

export default Home;