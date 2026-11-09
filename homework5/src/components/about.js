import React from 'react';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Joe-Turners</h1>
        <p>Your trusted independent bookstore since 2010.</p>
      </header>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in a small cozy neighborhood, Joe-Turners started with a simple mission: 
            to foster a love for reading by connecting authors and readers in a vibrant community.
          </p>
          <p>
            Today, we host thousands of titles across diverse genres—from fiction and science to historical memoirs 
            and children's literature.
          </p>

          <h2>Our Mission</h2>
          <p>
            We believe books have the power to educate, inspire, and transform lives. We are committed to 
            providing curated recommendations and exceptional customer care.
          </p>
        </div>

        <div className="store-info-box">
          <h3>Store Information</h3>
          <ul>
            <li><strong>📍 Location:</strong> 222-05 56th Avenue, Bayside, NY 11364</li>
            <li><strong>📞 Phone:</strong> (555) 123-4567</li>
            <li><strong>✉️ Email:</strong> Joe.support@pageturners.com</li>
            <li><strong>⏰ Hours:</strong> Mon - Sat: 9 AM - 8 PM Sun: 8 AM - 6 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;