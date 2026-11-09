import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const featuredBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: '$14.99',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: '$10.99',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Banner Section */}
      <header className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Joe-Turners</h1>
          <p>Discover your next favorite story. Explore our vast collection of classic and contemporary books.</p>
          <Link to="/about" className="cta-button">Learn More About Us</Link>
        </div>
      </header>

      {/* Featured Books Section */}
      <section className="featured-section">
        <h2>Featured Books</h2>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} className="book-image" />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="author">by {book.author}</p>
                <p className="price">{book.price}</p>
                <button className="buy-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Customer Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🚚 Fast Shipping</h3>
            <p>Free doorstep delivery on orders over $35.</p>
          </div>
          <div className="service-card">
            <h3>🔄 Easy Returns</h3>
            <p>30-day money-back guarantee with hassle-free returns.</p>
          </div>
          <div className="service-card">
            <h3>💬 24/7 Support</h3>
            <p>Dedicated customer support team at your service anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;