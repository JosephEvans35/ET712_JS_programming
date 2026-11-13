import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedId, setHighlightedId] = useState(null);

  // Expanded collection of 8 books
  const featuredBooks = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: '$14.99',
      category: 'Classic Literature',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: '$12.99',
      category: 'Classic Fiction',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      price: '$10.99',
      category: 'Dystopian',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: '$11.50',
      category: 'Romance',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: '$15.99',
      category: 'Fantasy',
      image: 'https://images.unsplash.com/photo-1629992101753-56d196c8aaf4?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      title: 'Dune',
      author: 'Frank Herbert',
      price: '$16.99',
      category: 'Sci-Fi',
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 7,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: '$13.25',
      category: 'Fiction',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 8,
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      price: '$11.99',
      category: 'Dystopian',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchTerm.trim().toLowerCase();

    if (!query) return;

    // Search against any book title in the expanded list
    const matchedBook = featuredBooks.find(
      (book) => book.title.toLowerCase() === query
    );

    if (matchedBook) {
      setHighlightedId(matchedBook.id);
      
      // Scroll smoothly to the matching book card
      const element = document.getElementById(`book-${matchedBook.id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Clear highlight after 3 seconds
      setTimeout(() => setHighlightedId(null), 3000);
    } else {
      // Redirect to NotFound page if no title matches
      navigate('/not-found');
    }
  };

  return (
    <div className="home-container">
      {/* Hero Banner Section */}
      <header className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to Joe-Turners</h1>
          <p>Explore our expanded collection of classics, fantasy, and modern masterpieces!</p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search title (e.g., Dune, The Hobbit)..."
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
        <h2>Explore Our Books ({featuredBooks.length})</h2>
        <div className="book-grid">
          {featuredBooks.map((book) => (
            <div 
              key={book.id}
              id={`book-${book.id}`}
              className={`book-card ${highlightedId === book.id ? 'highlighted-card' : ''}`}
            >
              <div className="card-badge">{book.category}</div>
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