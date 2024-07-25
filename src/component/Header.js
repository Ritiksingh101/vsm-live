import React from 'react';
import './Header.css';
import logo from './logo.jpeg';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`header-container ${isHome ? 'home-bg' : 'other-bg'}`}>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav-container">
        <Link to="/" className={`navs-link ${location.pathname === '/' ? 'active' : ''}`}>
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/books" className={`navs-link ${location.pathname === '/books' ? 'active' : ''}`}>
          <i className="fas fa-book"></i> Books
        </Link>
        <Link to="/feed" className={`navs-link ${location.pathname === '/feed' ? 'active' : ''}`}>
          <i className="fas fa-rss"></i> Feeds
        </Link>
        <Link to="/about" className={`navs-link ${location.pathname === '/about' ? 'active' : ''}`}>
          <i className="fas fa-info-circle"></i> About Us
        </Link>
        <Link to="/contact" className={`navs-link ${location.pathname === '/contact' ? 'active' : ''}`}>
          <i className="fas fa-envelope"></i> Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;


