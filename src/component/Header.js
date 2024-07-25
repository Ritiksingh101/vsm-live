// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import logo from './logo.jpeg';

// const Header = () => {
//   return (
//     <header className="header"> 
//       <div className="logo">
//         <Link to="/"> <img src={logo} alt="Logo" /></Link>
//       </div>
//       <nav className="nav-links">
//         <Link to="/feed">Feed</Link>
//         <Link to="/books">Books</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         {/* <Link to="/counter">Counter</Link> */}
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import './Header.css'; // Ensure this CSS file is created
import logo from './logo.jpeg';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <nav className="nav-container">
      <a href="/" className="navs-link">Home</a>
        <a href="/feed" className="navs-link">Feed</a>
        <a href="/books" className="navs-link">Books</a>
        <a href="/about" className="navs-link">About</a>
        <a href="/contact" className="navs-link">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
