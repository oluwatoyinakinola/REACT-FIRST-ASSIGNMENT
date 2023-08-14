import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create-profile">Create Profile</Link></li>
          <li><Link to="/delete-profile">Delete Profile</Link></li>
          <li><Link to="/color">Color Page</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
