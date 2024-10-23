import React from 'react';
import './landing.css';

function LandingPage() {
  return (
    <div className="landing-page">
    <header className="landing-header">
      <h1>Welcome to Our Pharmacy</h1>
      <p>Your health, our priority!</p>
      <button className="cta-button">Get Started</button>
    </header>
    <section className="features">
      <h2>Our Services</h2>
      <div className="feature-cards">
        <div className="card">
          <h3>Online Consultation</h3>
          <p>Talk to our experts from the comfort of your home.</p>
        </div>
        <div className="card">
          <h3>Prescription Delivery</h3>
          <p>Get your medications delivered to your doorstep.</p>
        </div>
        <div className="card">
          <h3>Health Monitoring</h3>
          <p>Stay updated with regular health checkups and reports.</p>
        </div>
      </div>
    </section>
  </div>
  );
}
export default LandingPage;
