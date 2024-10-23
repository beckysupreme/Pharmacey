import React from 'react';
import '../Path/Services.css';

export default function Services() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p>
        We offer a range of pharmacy services designed to meet your healthcare needs. Explore our comprehensive solutions below.
      </p>

      <div className="service-list">
        <div className="service-item">
          <h2>Prescription Fulfillment</h2>
          <p>
            We offer fast and accurate prescription fulfillment services. Your health is our priority, and we ensure your medications are ready on time.
          </p>
        </div>

        <div className="service-item">
          <h2>Medication Consultation</h2>
          <p>
            Our expert pharmacists are available for private consultations to help you understand your medications, dosage, and potential side effects.
          </p>
        </div>

        <div className="service-item">
          <h2>Health and Wellness Advice</h2>
          <p>
            We provide personalized health advice tailored to your specific needs, covering topics such as nutrition, exercise, and lifestyle.
          </p>
        </div>

        <div className="service-item">
          <h2>Vaccinations</h2>
          <p>
            Stay protected with our convenient in-store vaccination services. We offer a variety of vaccinations, including flu shots and more.
          </p>
        </div>
      </div>

      <button onClick={() => window.location.href='/contact'}>Contact Us</button>
    </div>
  );
}
