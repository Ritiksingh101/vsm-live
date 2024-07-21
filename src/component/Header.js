// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import logo from './logo.jpeg';
// const Header = () => {
//   const [isNavVisible, setIsNavVisible] = useState(false);

//   // const toggleNav = () => {
//   //   setIsNavVisible(!isNavVisible);
//   // };

//   return (
//     <header className="header"> 
//       <div className="logo">
//       <Link to="/"> <img src={logo} alt="Logoii" /></Link>
//       </div>
//       {/* {!isNavVisible && <button className="toggle-button" onClick={toggleNav}>
//         &#9776;
//       </button>} */}
//       {/* <nav className={`nav-links ${isNavVisible ? 'visible' : ''}`}> */}
//       <nav className={`nav-links ${isNavVisible ? 'visible' : ''}`}>
//         <button><Link to="/feed">Feed</Link></button>
//         <button><Link to="/books">Books</Link></button>
//         <button><Link to="/about">About</Link></button>
//         <button><Link to="/contact">Contact</Link></button>
//         <button><Link to="/counter">Counter</Link></button>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.jpeg';

const Header = () => {
  return (
    <header className="header"> 
      <div className="logo">
        <Link to="/"> <img src={logo} alt="Logo" /></Link>
      </div>
      <nav className="nav-links">
        <Link to="/feed">Feed</Link>
        <Link to="/books">Books</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </header>
  );
};

export default Header;
