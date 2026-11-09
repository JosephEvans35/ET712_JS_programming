import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedId, setHighlightedId] = useState(null);

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

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.trim().toLowerCase();

    // Check if the input matches any of the 3 book titles
    const matchedBook = featuredBooks.find(
      (book) => book.title.toLowerCase() === query
    );

    if (matchedBook) {
      setHighlightedId(matchedBook.id);
      // Optional: Clear highlight after 3 seconds
      setTimeout(() => setHighlightedId(null), 3000);
    } else {
      // Redirect to NotFound page using React Router
      navigate('/not-found');
    }
  };

  return (
    <div className="home-container">
      {/* Hero Banner Section with Search Bar */}
      <header className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to PageTurners</h1>
          <p>Discover your next favorite story. Search our featured collection below!</p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search book title (e.g., 1984)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">Search</button>
          </form>

          <Link to="/about" className="cta-button">Learn More About Us</Link>
        </div>
      </header>

      {/* Featured Books Section */}
      <section className="featured-section">
        <h2>Featured Books</h2>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <div 
              key={book.id} 
              className={`book-card ${highlightedId === book.id ? 'highlighted-card' : ''}`}
            >
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