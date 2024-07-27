// import React from 'react';
// import './Header.css';
// import logo from './logo.jpeg';
// import { useLocation, Link } from 'react-router-dom';

// const Header = () => {
//   const location = useLocation();
//   const isHome = location.pathname === '/';

//   return (
//     <header className={`header-container ${isHome ? 'home-bg' : 'other-bg'}`}>
//       <div className="logo-container">
//         <Link to="/" className="logo-link">
//           <img src={logo} alt="Logo" className="logo" />
//         </Link>
//       </div>
//       <nav className="nav-container">
//         <Link to="/" className={`navs-link ${location.pathname === '/' ? 'active' : ''}`}>
//           <i className="fas fa-home"></i> Home
//         </Link>
//         <Link to="/books" className={`navs-link ${location.pathname === '/books' ? 'active' : ''}`}>
//           <i className="fas fa-book"></i> Books
//         </Link>
//         <Link to="/feed" className={`navs-link ${location.pathname === '/feed' ? 'active' : ''}`}>
//           <i className="fas fa-rss"></i> Feeds
//         </Link>
//         <Link to="/about" className={`navs-link ${location.pathname === '/about' ? 'active' : ''}`}>
//           <i className="fas fa-info-circle"></i> About Us
//         </Link>
//         <Link to="/contact" className={`navs-link ${location.pathname === '/contact' ? 'active' : ''}`}>
//           <i className="fas fa-envelope"></i> Contact Us
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import './Header.css';
import logo from './logo.jpeg';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header-container ${isHome ? 'home-bg' : 'other-bg'}`}>
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <nav className={`nav-container ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={`navs-link ${location.pathname === '/' ? 'active' : ''}`}>
          <div className="icon-container">
            <i className="fas fa-home"></i>
          </div>
         <span className='navs-name'>Home</span>
        </Link>
        <Link to="/books" className={`navs-link ${location.pathname === '/books' ? 'active' : ''}`}>
          <div className="icon-container">
            <i className="fas fa-book"></i>
          </div>
          <span className='navs-name'>Books</span>
        </Link>
        <Link to="/feed" className={`navs-link ${location.pathname === '/feed' ? 'active' : ''}`}>
          <div className="icon-container">
            <i className="fas fa-rss"></i>
          </div>
          <span className='navs-name'>Feeds</span>
        </Link>
        <Link to="/about" className={`navs-link ${location.pathname === '/about' ? 'active' : ''}`}>
          <div className="icon-container">
            <i className="fas fa-info-circle"></i>
          </div>
          <span className='navs-name'>About Us</span>
        </Link>
        <Link to="/contact" className={`navs-link ${location.pathname === '/contact' ? 'active' : ''}`}>
          <div className="icon-container">
            <i className="fas fa-envelope"></i>
          </div>
          <span className='navs-name'>Contact Us</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
