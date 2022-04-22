import React, { useState } from 'react';
import './Header.css';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        STORE
      </a>
      <button
        type="button"
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/ProductDetail">Product Detail</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
