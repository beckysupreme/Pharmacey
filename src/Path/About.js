import React from 'react';
import '../Path/About.css';
import team from '../assets/team.jpg';
import team1 from '../assets/team1.jpg';

export default function About() {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        We are a team of dedicated professionals committed to providing excellent
        pharmacy services. Our goal is to ensure you receive the best care and guidance for all your pharmaceutical needs.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to improve health and well-being by delivering high-quality
        medications and exceptional customer service.
      </p>

      <h2>Our Journey</h2>
      <p>
        Since our founding, we have been passionate about serving our community with
        reliable and trustworthy pharmacy solutions. We have grown from a small pharmacy to a well-known provider in the region.
      </p>

      <h2>Meet the Team</h2>
      <div className="team">
        <div className="team-member">
          <img src={team} alt="Team Member 1" />
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src={team1} alt="Team Member 2" />
          <h3>Jane Smith</h3>
          <p>Head Pharmacist</p>
        </div>
        {/* Add more team members if needed */}
      </div>

      <h2>What We Offer</h2>
      <p>
        We specialize in providing personalized medication consultations, prescription
        fulfillment, and health advice.
      </p>

      <button onClick={() => window.location.href='/contact'}>Contact Us</button>
    </div>
  );
}
