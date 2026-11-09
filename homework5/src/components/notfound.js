import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page or book you are looking for has been misplaced or does not exist.</p>
        <Link to="/" className="home-btn">Return to Home Page</Link>
      </div>
    </div>
  );
}

export default NotFound;