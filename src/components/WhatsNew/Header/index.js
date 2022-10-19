import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <ul className="main-nav">
      <li><NavLink to="/whatsnew/component-did-catch">Component Did Catch</NavLink></li>
      <li><NavLink to="/whatsnew/error-boundaries">Error Boundaries</NavLink></li>
      <li><NavLink to="/whatsnew/portals">Portals</NavLink></li>
      <li><NavLink to="/whatsnew/set-state">Set State</NavLink></li>
    </ul>
  </header>
);

export default Header;
