import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">A Premier Publishing House</span>
          <h1>Empowering Scholarly Voices</h1>
          <p>
            Dedicated to bringing innovative research and scholarly works to life. 
            From manuscript submission to global distribution, we partner with authors 
            to inspire, educate, and challenge readers.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Submit Manuscript</button>
            <button className="btn-secondary">Explore Publications</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-circle gold"></div>
          <div className="visual-circle blue"></div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="features-section">
        <div className="section-header">
          <h2>Our Core Specializations</h2>
          <p>Tailored solutions for academic excellence across disciplines.</p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon gold">📚</div>
            <h3>Book Chapters</h3>
            <p>Contribute to peer-reviewed edited volumes.</p>
          </div>
          <div className="feature-card">
            <div className="icon blue">📖</div>
            <h3>Scholarly Books</h3>
            <p>Publish original monographs and research books.</p>
          </div>
          <div className="feature-card">
            <div className="icon white">🖊️</div>
            <h3>Editorial Support</h3>
            <p>Professional guidance from manuscript to publication.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;