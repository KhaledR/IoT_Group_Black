import React from 'react';
import './header.css'; // Import your styles if needed
import AuthHandler from '../components/authHandler.js';

const Header = () => {
  return (
    <header>
      <h1>Group Black's <span className="rectangular-shape">AWS</span></h1>
      <div>
      <AuthHandler />
      </div>
    </header>
  );
}

export default Header;