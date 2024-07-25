import React from 'react';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Footer from '../component/Footer';
import './HomeScreen.css'

function HomeScreen() {
  return (
    <>
      <Header/>
      <Slider/>
      <main className="home-main">
        <section className="hero-section">
          <h1>Welcome to Book Store</h1>
          <p>Your ultimate destination for discovering and purchasing the best books. Dive into our curated collection of bestsellers, new arrivals, and classic reads.</p>
          <a href="#explore" className="cta-button">Explore Our Collection</a>
        </section>

        <section id="featured-books" className="featured-books">
          <h2>Featured Books</h2>
          <div className="book-grid">
            <div className="book-item">
              <img src="/images/about-1.jpeg" alt="Book 1" />
              <h3>Book Title 1</h3>
              <p>Kevin</p>
              <p>Rs19.99</p>
            </div>
            <div className="book-item">
              <img src="/images/about-2.jpg" alt="Book 2" />
              <h3>Book Title 2</h3>
              <p>Jaypal</p>
              <p>Rs15.99</p>
            </div>
            <div className="book-item">
              <img src="/images/about-1.jpeg" alt="Book 3" />
              <h3>Book Title 3</h3>
              <p>Kripal</p>
              <p>Rs22.99</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Join Our Community</h2>
          <p>Subscribe to our newsletter for the latest updates, exclusive offers, and more.</p>
          <a href="#subscribe" className="cta-button">Subscribe Now</a>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default HomeScreen;
