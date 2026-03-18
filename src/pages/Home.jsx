import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Dynamic Background Grid */}
      <div className="bg-grid"></div>

      <section className="hero-main">
        <div className="hero-text">
          <div className="status-pill">
            <span className="dot"></span> Now Accepting Manuscripts
          </div>
          <h1>
            Publishing the <span className="gradient-text">Future</span> of Research
          </h1>
          <p>
            Empyrean Press merges academic rigor with modern digital distribution. 
            We don't just print books; we launch intellectual legacies.
          </p>
          <div className="cta-group">
            <button className="btn-glow">Start Publishing</button>
            <button className="btn-outline">Browse Library</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="abstract-shape">
            <div className="floating-card c1">Peer Reviewed</div>
            <div className="floating-card c2">Global Reach</div>
            <div className="floating-card c3">Digital First</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;