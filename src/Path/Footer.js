import React from 'react';
import '../Path/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are committed to providing top-quality pharmacy services to meet your healthcare needs.</p>
        </div>

        <div className="footer-section">
          <h3>Contact Information</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: info@pharmacy.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: +123 456 789</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Addis Ababa, Ethiopia</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/services">Services</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a> <br/>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a> <br/>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Pharmacy Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
